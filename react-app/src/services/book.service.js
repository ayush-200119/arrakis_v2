import axios from "axios";
import authHeader from "./auth.headers";

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "https://wingrowmarket.onrender.com/auth/";
 //const API_URL = "https://wingrowmarket.com/";
const REACT_APP_API_URL="http://localhost:8080/";

const getBooks = () => {
    return axios.get(REACT_APP_API_URL + "api/v1/books");
  };


//   const createCounterParty = 

const createBook = () =>{
    return axios.post(REACT_APP_API_URL + "api/v1/book",{});
}