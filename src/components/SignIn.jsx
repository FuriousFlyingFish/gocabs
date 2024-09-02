import React from 'react';
import '../styles.css'; // Assuming the CSS is in this file

const SignIn = () => {
  return (
    <div className="container">
      <div className="sign-in-box">
        <h1>Sign In Page</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="birthdate">Birth Date:</label>
          <input type="date" id="birthdate" name="birthdate" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />

          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />

          <label htmlFor="password">Create a Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign In</button>

          <p className="login-link">Already have an account? <a href="#">Login here</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
