import React from 'react';
import './BecomeDriver.css';

const BecomeDriver = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <h1>Go-&#62;Cab</h1>
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Ride Options</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="#" className="signup-btn">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="become-driver">
        <div className="container">
          <h2>Become a Driver</h2>
          <form>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

            <label htmlFor="vehicle">Vehicle Details:</label>
            <input type="text" id="vehicle" name="vehicle" placeholder="Enter vehicle make, model, and year" required />

            <label htmlFor="license">Driver's License Number:</label>
            <input type="text" id="license" name="license" placeholder="Enter your driver's license number" required />

            <label htmlFor="experience">Driving Experience (years):</label>
            <input type="number" id="experience" name="experience" min="0" required />

            <button type="submit" className="btn-primary">Register as Driver</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Go-&#62;Cab. All rights reserved.</p>
          <ul className="social-media">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default BecomeDriver;
