import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    value:null,
    click_value:null
}

export const click_configretion=createSlice({
    name:"click_configretion",
    initialState:initialSlice,
    reducers:{
        configretionSlider:(s,action)=>{
            s.value=action.payload
        },
        clickValueHandler:(s,action)=>{
            s.click_value=action.payload
        }
    }
})
export const{configretionSlider,clickValueHandler} =click_configretion.actions
export default click_configretion.reducer