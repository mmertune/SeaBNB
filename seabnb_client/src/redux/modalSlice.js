import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginVisible: false,
  sideVisible: false,
  signupVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.loginVisible = !state.loginVisible;
    },
    toggleSideModal: (state) => {
      state.sideVisible = !state.sideVisible;
    },
    toggleSignupModal: (state) => {
      state.signupVisible = !state.signupVisible;
    },
  },
});
// console.log(modalSlice);

export const { toggleLoginModal, toggleSideModal, toggleSignupModal } = modalSlice.actions;
export default modalSlice.reducer;
