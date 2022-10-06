import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignupModal } from "../redux/modalSlice";
import "../assets/css/Modal.css";

const SignupModal = () => {
  const {signupVisible} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const signupSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleSignupModal());
  };

  const cancelSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleSignupModal());
  };

  return (
    <div className={`modal signupmodal ${signupVisible ? "" : "modal_hide"}`}>
      <div className="modal_background" onClick={()=>dispatch(toggleSignupModal())}></div>
      <form className="signup_form">
        <h2>Signup Form</h2>
        <div className="signup_bbtnContainer">
          <button onClick={signupSubmit}>Sign Up</button>
          <button onClick={cancelSubmit}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SignupModal;
