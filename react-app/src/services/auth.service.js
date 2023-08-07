import axios from "axios";
import authHeader from "./auth.headers";

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "https://wingrowmarket.onrender.com/auth/";
 //const API_URL = "https://wingrowmarket.com/";
//const REACT_APP_API_URL="http://localhost:4000/";
const { REACT_APP_API_URL } = process.env;
//console.log("the url : ",REACT_APP_API_URL)

const register = (
  name,
  role,
  email,
  password
) => {
  return axios.post(REACT_APP_API_URL + "api/v1/user", {
    name,
    role,
    email,
    password
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
