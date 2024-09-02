import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
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
              <li><a href="#" className="current-page">Contact Us</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="#" className="signup-btn">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>

            <button type="submit" className="btn-primary">Send Message</button>
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

export default ContactUs;
