import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login.css';
import videoSource from '../Video/Vid.mp4';
// import Nav from './Nav';
// import Footer from './Footer';

const Login = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create a credentials object
    const credentials = { username, password };

    try {
      // Send a POST request to your Spring Boot backend for authentication
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Authentication was successful
       console.log(response);
        console.log('Authentication successful');
      
        // Redirect to the coin page or perform other actions
        navigate('/coin');
      } else {
        // Authentication failed
        // You can show an error message to the user
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div>
     <button type="submit"  className="login-button">
     <Link to="/" style={{ color: 'white', textDecoration:'none' }}>Home</Link>
          </button>

      <div className="vid">
        <video autoPlay loop muted className="video-background">
          <source src={videoSource} type="video/mp4" />
          {/* Add additional source tags for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <label id='k'>User</label>
          <input      
              style={{  backgroundColor:'rgb(165, 160, 160)' }}
            type="username"
            id="email"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />

          <label style={{ color: 'black' }} htmlFor="password">Password</label>
          <input
          style={{ color: 'black',  backgroundColor:'rgb(165, 160, 160)'}}
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <button className="tt">
            <Link to="/Signup" style={{ color: 'white', textDecoration:'none' }}>Signup</Link>
          </button>
        </form>
      </div>

      {/* <div className='footer-container'>
        <Footer />
      </div> */}
    </div>
  );
};

export default Login;
