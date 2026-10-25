import { createSlice } from "@reduxjs/toolkit";


const initialSlice={
    divided:[],
    invister:[],
    id_divided:[],
    selectedInvestors:[]
}
const dividedorder=createSlice({
    name:"dividedorder",
    initialState:initialSlice,
    reducers:{
           Set_Investor:(s,action)=>{
            s.invister=action.payload
           },
           set_dividedOrder:(s,action)=>{
            s.divided=action.payload
           },
        Remove_Divided:(s,action)=>{
            s.divided=s.divided.filter(item=>item.id !==action.payload)
        },
        show_divided_order:(s,action)=>{
                  s.id_divided=action.payload
        },
        setSelectedInvestors: (s, action) => {
            s.selectedInvestors = action.payload
        },
        addDivided: (s, action) => {
    s.divided.push(action.payload)
}
    }
})

export const {setSelectedInvestors,set_dividedOrder,Set_Investor,Remove_Divided,show_divided_order,addDivided}=dividedorder.actions
export default dividedorder.reducer