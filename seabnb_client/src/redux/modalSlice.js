import { createSlice } from "@reduxjs/toolkit";


const initialState={
    visible:false,
}

const modalSlice = createSlice({

    name:"modal",
    initialState,
    reducers:{
       toggleModal: (state)=>{
            state.visible = !state.visible
       }
    }
})
// console.log(modalSlice);

export const {toggleModal} = modalSlice.actions
export default modalSlice.reducer