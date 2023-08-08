import axios from "axios";
import authHeader from "./auth.headers";

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "https://wingrowmarket.onrender.com/auth/";
 //const API_URL = "https://wingrowmarket.com/";
const REACT_APP_API_URL="http://localhost:8080/";
//const { REACT_APP_API_URL } = process.env;
//console.log("the url : ",REACT_APP_API_URL)


const getAllSecurity = () => {
    return axios.get(REACT_APP_API_URL + "api/v1/securities");
  };


const createSecurity = (id,isin,cusip,issuer,maturityDate,coupon,type,faceValue,status,rating) =>{
    return axios.post(REACT_APP_API_URL + "api/v1/security",{id,isin,cusip,issuer,maturityDate,coupon,type,faceValue,status,rating})
}

const getSecurityById = (id) =>{
    return axios.get(REACT_APP_API_URL + 'api/v1/security/'+id)
    
}
const deleteSecurityById = (id) =>{
    return axios.delete(REACT_APP_API_URL + 'api/v1/security/'+id);
}

const updateSecurityById =(id,rating,status) =>{
    return axios.patch(REACT_APP_API_URL + 'api/v1/security/'+id,{rating,status} );
}
const getAllTradesById = (id )=>{
    return axios.get(REACT_APP_API_URL + 'api/v1/trades/user/' + id)
}
const UserService = {
    getAllSecurity,
    createSecurity,
    getSecurityById,
    deleteSecurityById,
    updateSecurityById,
    getAllTradesById
}
export default UserService;
