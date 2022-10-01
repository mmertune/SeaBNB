import React from "react";
import "../assets/css/Home.css";
import Card from "../components/Card";

const Home = () => {
  return(
  <div className="home gridBodyItem">
    {new Array(10).fill(null).map((card) => {
      return <Card />;
    })}
    {/* <Card /> */}
  </div>
)};

export default Home;
