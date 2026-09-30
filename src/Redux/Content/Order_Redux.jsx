import { createSlice } from "@reduxjs/toolkit";

const initialState={
    order:[],
    order_update:null
}

const OrderSlice=createSlice({
    name:"OrderSlice",
    initialState:initialState,
    reducers:{
        setorder:(s,action)=>{
            s.order=action.payload
        },
        save_edit_order:(s,action)=>{
            s.order =s.order.map(item=>{
                return item.id === action.payload.id ? action.payload.orders:item
           
            })
        },
        show_order:(s,action)=>{
            s.order_update=action.payload
        },
        set_edit_order:(s,action)=>{
               s.order_update={
                ...s.order_update,
                [action.payload.field]:action.payload.value
            }
        },
        remove_order:(s,action)=>{
            s.order=s.order.filter(item=>item.id !== action.payload.id)
        },
        add_order:(s,action)=>{
            s.order.push(action.payload)
        }
    }
})
export const {
setorder,
show_order,
order_Updet,
set_edit_order,
save_edit_order,
remove_order,
add_order
}=OrderSlice.actions
export default OrderSlice.reducer