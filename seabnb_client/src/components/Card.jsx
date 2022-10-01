import React from "react";
import testImage from "../assets/images/house1.jpeg";
import "../assets/css/Card.css";
import { GiRoundStar as RatingStar } from "react-icons/gi";

const Card = () => {
  return (
    <div className="card">
      <div className="card_ImgContainer">
        <img src={testImage} alt="" className="card_Img" />
      </div>
      <div className="card_TextContainer">
        <div className="card_locationInfo">
          <div className="card_LocationRating">
            <h2 className="card_Location">Miami, FL</h2>
            <div className="card_RatingContainer">
              <RatingStar /> <span className="card_Rating">4.32</span>
            </div>
        </div>
        <p className="card_Distance">190 miles</p>
        </div>

        <p className="card_Price">$130 per night</p>
      </div>
    </div>
  );
};

export default Card;
