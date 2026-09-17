import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    value:null
}

export const click_configretion=createSlice({
    name:"click_configretion",
    initialState:initialSlice,
    reducers:{
        configretionSlider:(s,action)=>{
            s.value=action.payload
        }
    }
})
export const{configretionSlider} =click_configretion.actions
export default click_configretion.reducer