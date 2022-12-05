import React from "react";
// import { Button } from "../components";
import { RiShip2Line as MainLogo } from "react-icons/ri";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { TbMinusVertical as VerticalLine } from "react-icons/tb";
import { VscMenu as BurgerMenu } from "react-icons/vsc";
import { GoSignIn as LoginIcon } from "react-icons/go";
import { GoSignOut as SignoutIcon } from "react-icons/go";
import { RiAccountCircleLine as SignUpIcon } from "react-icons/ri";
import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";
import "../assets/css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/authSlice";
import {
  // toggleLoginModal,
  toggleSideModal,
  // toggleSignupModal,
} from "../redux/modalSlice";

const Header = ({ search }) => {
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
      <Link to="/" className={"header_logoContainer"}>
        <MainLogo className="header_logoItem" />
        <p className="header_logoText">seabnb</p>
      </Link>
      {/* <div className="header_logoContainer">
        <MainLogo />
        <h1 className="header_logoText">seabnb</h1>
      </div> */}

      {search === true && (
        <div className="header_searchContainer">
          <form action="submit" className="header_form">
            <label className="header_formLabel">
              <input type="text" placeholder="Where?" />
              <VerticalLine className="header_inputSeparator" />
              <input type="text" placeholder="Rating?" />
              <VerticalLine className="header_inputSeparator" />
              <input type="text" placeholder="Price?" />
              <button className="header_button" onClick={submitForm}>
                <SearchIcon />
              </button>
            </label>
          </form>
        </div>
      )}
      {search === false && user && (
        <div className="header_dashboardLinks">
          <ul className="header_listContainer">
            <li className="header_listItem">
              <Link to="/dashboard" className="header_viewCabins">
                My Cabins
              </Link>
            </li>
            <li className="header_listItem">
              <Link to="/dashboard/add" className="header_addCabin">
                Add Cabin
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="header_accountContainer">
        {/* <Button
          title="Login"
          styleName="header_login"
          onClickFunction={displayLoginModal}
        />
        <Button title="Sign Up" styleName="header_signup" onClickFunction={displaySignupModal}
/> */}
        <ul className="header_listContainer">
          {user ? (
            <>
              <li className="header_listItem">
                <Link to="/dashboard" className={"header_dashboard"}>
                  <DashboardIcon className="header_icon" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="header_listItem">
                <button className="header_logout" onClick={logoutUser}>
                  <SignoutIcon className="header_icon" />
                  <p>Logout</p>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="header_listItem">
                <Link to="/login" className={"header_login"}>
                  <LoginIcon className="header_icon" />
                  <p>Login</p>
                </Link>
              </li>
              <li className="header_listItem">
                <Link to="/signup" className={"header_signup"}>
                  <SignUpIcon className="header_icon" />
                  <p>Sign Up</p>
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
