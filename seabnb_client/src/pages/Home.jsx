import React, { useEffect } from "react";
import "../assets/css/Home.css";
import { Card, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllCabins, reset } from "../redux/cabinSlice";

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
      <main className="home gridBodyItem">
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
      </main>
    );
};

export default Home;
