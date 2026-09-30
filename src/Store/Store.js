import { configureStore } from "@reduxjs/toolkit";
import click_configretion from "../Redux/Content/ClickConfigretion"
import TokenSlice from "../Redux/Content/TokenSlice";
import RequestState from '../Redux/Content/RequestState'
import Infoinvestor from "../Redux/Content/InfoInvester"
import OrderSlice from '../Redux/Content/Order_Redux'
export const Store=configureStore({
    reducer:{
        Token:TokenSlice,
        whoclick:click_configretion,
        staus:RequestState,
        infoValue:Infoinvestor,
        order_value:OrderSlice
    },
})