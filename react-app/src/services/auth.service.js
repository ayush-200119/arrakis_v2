import axios from "axios";
import authHeader from "./auth.headers";

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "https://wingrowmarket.onrender.com/auth/";
 //const API_URL = "https://wingrowmarket.com/";
const REACT_APP_API_URL="http://localhost:8080/";
//const { REACT_APP_API_URL } = process.env;
//console.log("the url : ",REACT_APP_API_URL)

const register = (
  name,
    email,
    role,
    password,
    id
) => {
  return axios.post(REACT_APP_API_URL + "api/v1/user", {
    name,
    email,
    role,
    password,
    id
    
  });
};

const login = (email, password) => {
  return axios.post(REACT_APP_API_URL + "api/v1/user/login ", {
      email,
      password
    }).then((response) => {
      
        console.log("axios call resolved",response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    })
    .catch(err => console.log(err.message));
};

const logout = () => {
  console.log("removed")
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};


const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
