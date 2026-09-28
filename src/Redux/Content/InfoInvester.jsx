import { createSlice } from "@reduxjs/toolkit";
import Add_investorContent from "../../Content/Add_investorContent";

const initialSlice={
    info:[]

}
const Infoinvestor=createSlice({
    name:"Infoinvestor",
    initialState:initialSlice,
    reducers:{
        setInfo:(s,action)=>{
            s.info=action.payload
        },
        Remove_investers:(s,action)=>{
          s.info=  s.info.filter(item=>item.id !== action.payload)
        },
        withdraw_InvestorMony:(s,action)=>{
            s.info=s.info.map(item=>{
              return  item.id === action.payload.id?
                {
                    ...item,
                    investedMone:action.payload.investedMone,
                    Withdrawn:action.payload.Withdrawn
                }:item
            })
        },
        Depost_InvestorMony:(s,action)=>{
            s.info=s.info.map(item=>{
             return   item.id === action.payload.id?
                {
                       ...item,
                    investedMone:action.payload.investedMone,
                }:item
            })
        },
        Add_investor:(s,action)=>{
            s.info.push(action.payload)
        }
    }
})
export const {setInfo,Remove_investers,withdraw_InvestorMony,Depost_InvestorMony,Add_investor} =Infoinvestor.actions
export default Infoinvestor.reducer