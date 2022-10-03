import React, { useState } from "react";
import testImage from "../assets/images/house1.jpeg";
import "../assets/css/Card.css";
import { GiRoundStar as RatingStar } from "react-icons/gi";

const Card = ({city, stateAbbrv,rating,address,pricePerNight}) => {

  return (
    <div className="card">
      <div className="card_ImgContainer">
        <img src={testImage} alt="" className="card_Img" />
      </div>
      <div className="card_TextContainer">
        <div className="card_locationInfo">
          <div className="card_LocationRating">
            <h2 className="card_Location">{city}, {stateAbbrv}</h2>
            <div className="card_RatingContainer">
              <RatingStar /> <span className="card_Rating">{rating}</span>
            </div>
          </div>
          <p className="card_Distance">{address} miles</p>
        </div>

        <p className="card_Price">${pricePerNight} per night</p>
      </div>
    </div>
  );
};

export default Card;
