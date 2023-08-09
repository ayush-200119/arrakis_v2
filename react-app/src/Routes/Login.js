



import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from '../services/auth.service';
import '../styles/Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (username === 'yourUsername' && password === 'yourPassword') {
  //     // Successful login logic
  //     setError('');
  //     // alert('Login successful!');
  //     AuthService.login(username,password)
  //     .then

  //   } else {
  //     setError('Invalid username or password');
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      
    console.log("inside handleLogin")
      AuthService.login(email, password).then(
        (res) => {
          console.log(res);
          
          
          if ((res.role).toLowerCase() === "user") {
            toast.success("Login successful!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // setTimeout(() => {
                console.log("going to user")
                console.log(res);
                navigate("/user");
              
            // }, 5000);
          }
          if ((res.role).toLowerCase() === "admin") {
            toast.success("Login successful!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // setTimeout(() => {
              navigate("/approver");
             // window.location.reload();
            // }, 1000);
          }


        
          
          
        },
        (error) => {
          console.log("here in error",error)
          toast.warn("Login failed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmail("");
          setPassword("");
          window.location.reload(false);
      
        }
      ).catch((err)=>{
        console.log("here in error",err)
          toast.warn("Login failed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmail("");
          setPassword("");
      });
    } else {
      toast.warn("data invalid", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload(false);

    }
  };
  return (
    <div className="login">
      
      <form onSubmit={handleLogin}>
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={email}
            placeholder="Enter your Email here"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <br />
          
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Login</button>
        </form>
      {error && <p className="error">{error}</p>}
      </div>

      
  );
};
export default Login;