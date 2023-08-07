import axios from "axios";
import authHeader from "./auth.headers";

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "https://wingrowmarket.onrender.com/auth/";
const API_URL1 = "https://wingrowmarket.com:8443/auth/";
 //const API_URL = "https://wingrowmarket.com/";
//const REACT_APP_API_URL="http://localhost:4000/";
const { REACT_APP_API_URL } = process.env;
//console.log("the url : ",REACT_APP_API_URL)

const register = (
  phone,
  password,
  firstname,
  lastname,
  type,
  farmertype,
  address,
  tags,
  employeeID,
) => {
  return axios.post(REACT_APP_API_URL + "auth/signup", {
    phone,
    password,
    firstname,
    lastname,
    type,
    farmertype,
    address,
    tags,
  employeeID,
  });
};

const login = (phone, password) => {
  return axios.post(REACT_APP_API_URL + "auth/signin", {
      phone,
      password,
    }).then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const check = (phone) => {
  return axios.post(REACT_APP_API_URL + "check" ,{
    phone
  }).then((response) =>{
    return response.data
  })
}
const addAddress = (address) => {
  return axios
    .post(REACT_APP_API_URL + "auth/address", { address }, { headers: authHeader() })
    .then((response) => {
      console.log(response.data)
      return response.data;
    });
};

const addimage = (formData) => {
  return axios
    .put(REACT_APP_API_URL + "image", formData, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  console.log("removed")
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const feedback = (message,stars) => {
  return axios.post(REACT_APP_API_URL + "feedback", {
    
    message,
    stars,
  });
};

const newpassword = (phone, password) => {
  return axios.post(REACT_APP_API_URL + "newpassword", {
    phone,
    password,
  });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  addAddress,
  addimage,
  feedback,
  newpassword,
  check
};

export default AuthService;
