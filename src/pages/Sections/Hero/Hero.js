import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/restaurantchef.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
          Tucked in the lively center of Chicago, Little Lemon offers a perfect blend of modern flair and cozy nostalgia. Our carefully crafted menu, featuring artisanal bruschettas, succulent burgers, and refreshing Greek salads, promises a dining experience that will satisfy both your taste buds and your soul.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
