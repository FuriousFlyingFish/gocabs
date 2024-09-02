import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
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

      <section className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <p>Welcome to Go-&#62;Cab, your trusted partner in ride-sharing. We are committed to providing safe, reliable, and affordable transportation solutions to our customers. Our mission is to make your travel experience as seamless and enjoyable as possible.</p>
          
          <h3>Our Mission</h3>
          <p>At Go-&#62;Cab, our mission is to revolutionize the way people travel by offering a user-friendly platform that connects riders and drivers. We strive to offer a service that is not only convenient but also reliable and affordable, ensuring that your journey is smooth and stress-free.</p>
          
          <h3>Meet Our Team</h3>
          <div className="team">
            <div className="team-member">
              <img src="team-member1.jpg" alt="Bahaar" />
              <h4>Bahaar Sharma</h4>
              <p>Co-Founder & CEO</p>
              <p>Bahaar is the visionary behind Go-&#62;Cab, with years of experience in the transportation industry.</p>
            </div>
            <div className="team-member">
              <img src="team-member2.jpg" alt="Bhumi" />
              <h4>Bhumi Alhawat</h4>
              <p>Chief Operating Officer</p>
              <p>Bhumi oversees the day-to-day operations, ensuring everything runs smoothly.</p>
            </div>
            <div className="team-member">
              <img src="team-member2.jpg" alt="Arsh" />
              <h4>Arsh Sudan</h4>
              <p>Founder</p>
              <p>Arsh oversees the day-to-day operations, ensuring everything runs smoothly.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
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

export default AboutUs;
