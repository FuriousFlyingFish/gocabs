// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Go -&#62; Cab</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Ride Options</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a onClick={() => navigate("/login")}>Login</a></li>
            <li><a href="#" className="signup-btn">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


