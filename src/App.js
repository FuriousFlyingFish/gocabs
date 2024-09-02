import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Login from './components/Login';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';
import BecomeDriver from './components/BecomeDriver'; // Import BecomeDriver component
import BookRide from './components/BookRide'; // Import BookRide component
import ContactUs from './components/ContactUs'; // Import ContactUs component
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/become-driver" element={<BecomeDriver />} /> {/* Add route for BecomeDriver */}
          <Route path="/book-ride" element={<BookRide />} /> {/* Add route for BookRide */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Add route for ContactUs */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <HeroSection />
    <FeaturesSection />
  </>
);

export default App;
