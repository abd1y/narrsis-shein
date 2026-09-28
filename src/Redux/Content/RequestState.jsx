import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    LodingValue:false,
    ErorrValue:false
}
const RequestState=createSlice({
    name:"RequestState",
    initialState:initialSlice,
    reducers:{
        setloding:(s,action)=>{
            s.LodingValue=action.payload
        },
        seterorr:(s,action)=>{
            s.ErorrValue=action.payload
        },
    }
})
export const {setloding,seterorr} =RequestState.actions
export default RequestState.reducer