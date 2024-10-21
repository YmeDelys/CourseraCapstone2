import React from "react";
import "./About.css";
import Image from "../../../assets/restauranfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        Tucked away in the vibrant heart of Chicago, Little Lemon blends modern charm with a touch of cozy nostalgia. Our eclectic, handcrafted menu—featuring mouthwatering bruschettas, juicy burgers, and crisp Greek salads—reflects our passion for food as an art form. Each dish, crafted by skilled chefs using locally-sourced ingredients, promises to delight your taste buds and uplift your spirit. Whether you're looking for a romantic evening, a family gathering, or a laid-back meal with friends, Little Lemon is the perfect spot. Visit us in the heart of Chicago for a dining experience to remember.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
