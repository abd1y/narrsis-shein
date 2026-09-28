import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    value:localStorage.getItem("Token")
}
export const TokenSlice=createSlice({
    name:"Token",
    initialState:initialSlice,
    reducers:{
        LoginToken:(s,action)=>{
s.value=action.payload
localStorage.setItem("Token",action.payload)
        },
        LogoutToken:(s)=>{
            s.value=null
            localStorage.removeItem("Token")
        }
    }
})
export const {LoginToken,LogoutToken} =TokenSlice.actions
export default TokenSlice.reducer