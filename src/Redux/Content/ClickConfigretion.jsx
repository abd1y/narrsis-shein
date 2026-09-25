import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    value:null,
    Auth:false
}

export const click_configretion=createSlice({
    name:"click_configretion",
    initialState:initialSlice,
    reducers:{
        configretionSlider:(s,action)=>{
            s.value=action.payload
        },
        AuthSlider:(s,action)=>{
            s.Auth=action.payload
        }
    }
})
export const{configretionSlider,AuthSlider} =click_configretion.actions
export default click_configretion.reducer