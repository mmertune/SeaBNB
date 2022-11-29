import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import cabinReducer from "./cabinSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    cabin: cabinReducer,
  },
});
