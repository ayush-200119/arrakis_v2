import React from 'react'
import { useState } from 'react';
import './Register.css'

const Register = () => {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
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