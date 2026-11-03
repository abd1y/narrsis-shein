import { createSlice } from "@reduxjs/toolkit";
const updatePercentages = (info) => {
    const total = info.reduce(
        (sum, item) => sum + Number(item.investedMone || 0),
        0
    );

    return info.map(item => ({
        ...item,
        investor_percentage: total
            ? Number(((item.investedMone / total) * 100).toFixed(2))
            : 0
    }));
};

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
withdraw_InvestorMony: (s, action) => {
    s.info = updatePercentages(
        s.info.map(item =>
            item.id === action.payload.id
                ? {
                    ...item,
                    investedMone: action.payload.investedMone,
                    Withdrawn: action.payload.Withdrawn
                }
                : item
        )
    );
},

Depost_InvestorMony: (s, action) => {
    s.info = updatePercentages(
        s.info.map(item =>
            item.id === action.payload.id
                ? {
                    ...item,
                    investedMone: action.payload.investedMone
                }
                : item
        )
    );
},

Add_investor: (s, action) => {
    s.info = updatePercentages([
        ...s.info,
        action.payload
    ]);
},
        
    }
})
export const {setInfo,Remove_investers,withdraw_InvestorMony,Depost_InvestorMony,Add_investor} =Infoinvestor.actions
export default Infoinvestor.reducer