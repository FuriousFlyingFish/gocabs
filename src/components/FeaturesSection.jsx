import React from 'react';
import '../styles.css';

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Book a ride with just a few clicks.</p>
        </div>
        <div className="feature">
          <h3>Affordable Pricing</h3>
          <p>Get the best rates for every trip.</p>
        </div>
        <div className="feature">
          <h3>Safe &amp; Secure</h3>
          <p>All drivers are verified for your safety.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
