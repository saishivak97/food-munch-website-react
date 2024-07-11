import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
    <div className="navbar-container">
      <a className="navbar-brand" href="#">
        <img src="./images/food-munch-img.png" className="food-munch-logo" alt="Food Munch Logo" />
      </a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" id="navItem1" href="#wcuSection">Why Choose Us?<span className="sr-only">(current)</span></a>
          <a className="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
          <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">Delivery & Payment</a>
          <a className="nav-link" href="#followUsSection" id="navItem4">Follow Us</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
