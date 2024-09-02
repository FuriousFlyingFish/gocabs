import React from 'react';
import '../styles.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>Your Ride, Your Choice</h2>
        <p>Safe, reliable, and affordable rides at your fingertips.</p>
        <a href="#" className="btn-primary">Book a Ride</a>
        <a href="#" className="btn-secondary">Become a Driver</a>
      </div>
    </section>
  );
};

export default HeroSection;
