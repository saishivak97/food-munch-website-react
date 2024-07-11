import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => (
  <div className="wcu-section" id="wcuSection">
    <div className="wcu-container">
      <h1 className="wcu-section-heading">Why Choose Us?</h1>
      <p className="wcu-section-description">We use both original recipes and classic versions of famous food items.</p>
      <div className="wcu-card-container">
        <div className="wcu-card">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" alt="Food Service" />
          <h1 className="wcu-card-title">Food Service</h1>
          <p className="wcu-card-description">
            Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect.
          </p>
        </div>
        <div className="wcu-card">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" alt="Fresh Food" />
          <h1 className="wcu-card-title">Fresh Food</h1>
          <p className="wcu-card-description">
            The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.
          </p>
        </div>
        <div className="wcu-card">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" alt="Best Offers" />
          <h1 className="wcu-card-title">Best Offers</h1>
          <p className="wcu-card-description">
            Food Coupons & Offers up to <span className="offers">50% OFF</span> and Exclusive Promo Codes on All Online Food Orders.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
