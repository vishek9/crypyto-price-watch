import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Nav from './Nav';
import "../Signup.css";
import videoSource from '../Video/Vid.mp4';
// import Footer from './Footer';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Create a user object with the registration data
    const newUser = { username, email, password };
  
    try {
      // Send a POST request to the backend endpoint for user registration
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        // Registration was successful
        alert('Registration successful!'); // You can provide user feedback here
      } else {
        // Handle registration failure
        alert('Registration failed. Please try again.'); // You can provide user feedback here
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle errors, e.g., network issues or server problems
      alert('An error occurred during registration. Please try again later.'); // You can provide user feedback here
    }
  };
  
  return (
 

 
    <div >
     <button type="submit"  className="login-button">
     <Link to="/" style={{ color: 'white', textDecoration:'none' }}>Home</Link>
          </button>

     <div>
             <video autoPlay loop muted className="video-background">
       <source src={videoSource} type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video></div>
      <div className="signup-container">
      <form onSubmit={handleSignUp} className="signup-form">
        <label htmlFor="username">Username</label>
        <input
        
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <button  className="signupb">
        <Link to="/Login" style={{ color: 'white', textDecoration:'none' }}>  Login </Link>
         
        </button>
      </form></div>
      {/* <div className='footer-container'>
        <Footer />
      </div> */}
      
      </div>
    
  );
};

export default SignUp;
