import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCardInfo = async () => {
    setIsLoading(true);
    console.log("Mounting");
    await axios
      .get(`http://localhost:3010/api/cabins`)
      .then(({ data }) => {
        console.log(data);
        setCardInfo(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchCardInfo();
  }, []);

  if (isLoading === true) {
    return <div>is Loading</div>;
  }
  return (
    <div className="home gridBodyItem">
      {cardInfo.map((cardInfo) => {
        return (
          <Card
            key={cardInfo._id}
            city={cardInfo.city}
            stateAbbrv={cardInfo.stateAbbrv}
            rating={cardInfo.rating}
            address={cardInfo.address}
            pricePerNight={cardInfo.pricePerNight}
          />
        );
      })}
    </div>
  );
};

export default Home;
