import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Modal.css";
import { toggleLoginModal } from "../redux/modalSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const { loginVisible } = useSelector((store) => store.modal);

  const loginSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleLoginModal());
  };

  const cancelSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleLoginModal());
  };

  return (
    <div className={`loginmodal ${loginVisible ? "" : "loginmodal_hide"}`}>
      <div
        className="loginmodal_background"
        onClick={() => dispatch(toggleLoginModal())}
      ></div>
      <form className="loginmodal_form">
        <h2>Login Form</h2>
        <div className="loginmodal_bttnContainer">
          <button onClick={loginSubmit}>Login</button>
          <button onClick={cancelSubmit}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
