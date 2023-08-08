// Home.js
// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
       
      <div className="card">
      
      
      
      
      <div className="button-container">
      <h1>Welcome to Our Website</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
    </div> 
    </div>
  );
};

export default Home;

