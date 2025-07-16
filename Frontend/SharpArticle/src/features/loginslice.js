import React, { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginstatus:false,
}

const loginslice = createSlice({
    initialState,
    reducers:{
        changeStatus:(state,action)=>{
            state.loginstatus = action.payload;
        }
    }
})

export const {changeStatus} = loginslice.actions;

export default loginslice.reducer;