import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import { Card, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllCabins, reset } from "../redux/cabinSlice";
import axios from "axios";
// import { RiMessageFill } from "react-icons/ri";

const Home = () => {
  const dispatch = useDispatch();
  const { cabins, isLoading } = useSelector((state) => state.cabin);

  console.log(cabins);
  useEffect(() => {
    dispatch(getAllCabins());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else
    return (
      <div className="home gridBodyItem">
        {cabins.map((cardInfo) => {
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
