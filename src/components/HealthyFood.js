import React from "react";
import "./HealthyFood.css";

const HealthyFood = () => (
  <div className="healthy-food-section pt-5 pb-5">
    <div className="healthy-food-container">
      <div className="text-center">
        <img className="healthy-food-section-img" src="./images/healthy-food-plate-img.png" />
      </div>

      <div className="">
        <h1 className="healthy-food-section-heading">
          Fresh, Healthy, Organic, Delicious Fruits
        </h1>
        <p className="healthy-food-section-description">
          Say no to harmful chemicals and go fully organic with our range of
          fresh fruits and veggies. Pamper your body and your senses with the
          true and unadulterated gifts from mother nature. with the true and
          unadulterated gifts from mother nature.
        </p>
        <button className="customs-button">Watch Video</button>
      </div>
    </div>
  </div>
);

export default HealthyFood;
