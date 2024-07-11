import React from "react";
import "./DeliveryPayment.css";

const DeliveryPayment = () => (
  <div
    className="delivery-and-payment-section pt-5 pb-5"
    id="deliveryPaymentSection"
  >
    <div className="delivery-and-payment-container">
      <div className="delivery-and-payment-inner-container">
        <h1 className="delivery-and-payment-section-heading">
          Delivery and Payment
        </h1>
        <p className="delivery-and-payment-section-description">
          Enjoy hassle-free payment with the plenitude of payment options
          available for you. Get live tracking and locate your food on a live
          map. It's quite a sight to see your food arrive to your door. Plus,
          you get a 5% discount on every order every time you pay online.
        </p>
        <button className="delivery-payment-customs-button">Order Now</button>
        <div className="mt-3">
          <img
            src="./images/visa-card-img.png"
            className="payment-card-img"
          />
          <img
            src="./images/master-card-img.png"
            className="payment-card-img"
          />
          <img
            src="./images/paypal-card-img.png"
            className="payment-card-img"
          />
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
            className="payment-card-img"
          />
        </div>
      </div>

      <div className="text-center">
        <img
          src="./images/delivery-payment-section-img.png"
          className="delivery-and-payment-section-img"
        />
      </div>
    </div>
  </div>
);

export default DeliveryPayment;
