import React from 'react'
import { useState } from 'react';
import './Register.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

import AuthService from '../services/auth.service';
const Register = () => {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      role:'',

    });
    const navigate = useNavigate();

  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can add your form submission logic here
      console.log(formData);
      AuthService.register(formData.name,formData.role,formData.email,formData.password)
      .then(() => {
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          //logic
          if (formData.role === "user1" ||formData.role === "user2" ||formData.role === "user3" ||formData.role === "user4" ) {
            navigate("/user");
          } else {
            navigate("/approver")
          }
        }, 1000);
      },
      (error) => {
        toast.warn("User Already Exists", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          name: '',
          email: '',
          password: '',
          role:'',
        });
        setTimeout(() => {
         
            navigate("/login");
          

          window.location.reload();
        }, 1000);
      })
      
    };
  
    return (
      <div className="registration-form">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your name here"
            onChange={handleInputChange}
            required
          />
  
          <br />
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            placeholder="Enter your Role here"
            onChange={handleInputChange}
            required
          />
  
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
  
          <button type="submit">Register</button>
        </form>
      </div>
    );
};
  


export default Register