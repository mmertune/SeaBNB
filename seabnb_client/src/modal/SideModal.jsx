import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Modal.css"
import {toggleSideModal} from "../redux/modalSlice"

const SideModal = () => {
  const {sideVisible} = useSelector(store=>store.modal)
   const dispatch = useDispatch()
  return (
    <div className={`sidemodal modal ${sideVisible ? "" : "modal_hide"}`}>
      <div className="modal_background" onClick={()=>dispatch(toggleSideModal())}></div>
      <aside className="sidemodal_sideContainer">
        <button onClick={()=>dispatch(toggleSideModal())}>Add Campground</button>
      </aside>
    </div>
  );
};

export default SideModal;
