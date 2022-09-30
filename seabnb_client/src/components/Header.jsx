import React from "react";
import {Button} from "../components"
import { RiShip2Line as MainLogo} from "react-icons/ri";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { TbMinusVertical as VerticalLine } from "react-icons/tb";
import { VscMenu as BurgerMenu} from "react-icons/vsc";

import "../assets/css/Header.css"

const Header = () => {
  
  const submitSearch = (event)=>{
    event.preventDefault()
    console.log("Submitted")
  }
  return (
    <header className="header gridHeader">
      <div className="header_logoContainer">
        <MainLogo />
        <span className="header_logoText">seabnb</span>
      </div>
      <div className="header_searchContainer" >
        <form action="submit" onSubmit={submitSearch} className="header_form">
          <label className="header_formLabel" >
            <input type="text" placeholder="Where?" />
            <VerticalLine />
            <input type="text" placeholder="When?" />
            <VerticalLine />
            <input type="text" placeholder="How many?" />
            <button onSubmit={submitSearch} className="header_button">
              <SearchIcon />
            </button>
          </label>
        </form>
      </div>
      <div className="header_accountContainer">
      <Button title="Login" styleName="header_login"/>
      <Button title="Sign Up" styleName="header_signup"/>
      <button className="header_burgerMenu"><BurgerMenu /></button>
      </div>
    </header>
  );
};

export default Header;
