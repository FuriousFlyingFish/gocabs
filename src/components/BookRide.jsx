import React from 'react';
import './BookRide.css';

const BookRide = () => {
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

      <section className="book-ride">
        <div className="container">
          <h2>Book a Ride</h2>
          <form>
            <label htmlFor="pickup">Pickup Location:</label>
            <input type="text" id="pickup" name="pickup" placeholder="Enter pickup location" required />

            <label htmlFor="dropoff">Dropoff Location:</label>
            <input type="text" id="dropoff" name="dropoff" placeholder="Enter dropoff location" required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="passengers">Number of Passengers:</label>
            <input type="number" id="passengers" name="passengers" min="1" required />

            <button type="submit" className="btn-primary">Book Ride</button>
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

export default BookRide;
