import React from "react";
// import { Button } from "../components";
import { RiShip2Line as MainLogo } from "react-icons/ri";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { TbMinusVertical as VerticalLine } from "react-icons/tb";
import { VscMenu as BurgerMenu } from "react-icons/vsc";
import "../assets/css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/authSlice";
import {
  // toggleLoginModal,
  toggleSideModal,
  // toggleSignupModal,
} from "../redux/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Subitted Form");
  };

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // const displayLoginModal = () => {
  //   dispatch(toggleLoginModal());
  //   console.log("Login Popup");
  // };
  // const displaySignupModal = () => {
  //   dispatch(toggleSignupModal());
  //   console.log("Signup Popup");
  // };
  const displaySideModal = () => {
    dispatch(toggleSideModal());
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
        {/* <Button
          title="Login"
          styleName="header_login"
          onClickFunction={displayLoginModal}
        />
        <Button title="Sign Up" styleName="header_signup" onClickFunction={displaySignupModal}
/> */}
        <ul>
          {user ? (
            <>
              <li>
                <button className={"header_logout"} onClick={logoutUser}>
                  Logout
                </button>
              </li>
              <li>
                <Link to="/dashboard" className={"header_dashboard"}>
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className={"header_login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className={"header_login"}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
        <button className="header_burgerMenu" onClick={displaySideModal}>
          <BurgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
