import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    LodingValue:false,
    ErorrValue:false,
    statusValue:false
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
        statushandler:(s,action)=>{
s.statusValue=action.payload
        }
    }
})
export const {setloding,seterorr,statushandler} =RequestState.actions
export default RequestState.reducer