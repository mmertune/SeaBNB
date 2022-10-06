import React from "react";
import { Button } from "../components";
import { RiShip2Line as MainLogo } from "react-icons/ri";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { TbMinusVertical as VerticalLine } from "react-icons/tb";
import { VscMenu as BurgerMenu } from "react-icons/vsc";
import "../assets/css/Header.css";

import { useDispatch } from "react-redux";
import { toggleLoginModal, toggleSideModal, toggleSignupModal } from "../redux/modalSlice";

const Header = () => {
  const dispatch = useDispatch();

  const submitForm = (event)=>{
event.preventDefault()
  console.log("Subitted Form")
  }

  const displayLoginModal = () => {
    dispatch(toggleLoginModal())
    console.log("Login Popup");
  };
  const displaySignupModal = () => {
    dispatch(toggleSignupModal())
    console.log("Signup Popup");
  };
  const displaySideModal = () => {
    dispatch(toggleSideModal())
    console.log("Side Popup");
  };


  return (
    <header className="header gridHeaderItem">
      <div className="header_logoContainer">
        <MainLogo />
        <h1 className="header_logoText">seabnb</h1>
      </div>
      <div className="header_searchContainer">
        <form action="submit" className="header_form">
          <label className="header_formLabel">
            <input type="text" placeholder="Where?" />
            <VerticalLine />
            <input type="text" placeholder="When?" />
            <VerticalLine />
            <input type="text" placeholder="How many?" />
            <button className="header_button" onClick={submitForm}>
              <SearchIcon />
            </button>
          </label>
        </form>
      </div>
      <div className="header_accountContainer">
        <Button
          title="Login"
          styleName="header_login"
          onClickFunction={displayLoginModal}
        />
        <Button title="Sign Up" styleName="header_signup" onClickFunction={displaySignupModal}
/>
        <button className="header_burgerMenu" onClick={displaySideModal}>
          <BurgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
