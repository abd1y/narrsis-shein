import { configureStore } from "@reduxjs/toolkit";
import click_configretion from "../Redux/Content/ClickConfigretion"
export const Store=configureStore({
    reducer:{
        whoclick:click_configretion
    },
})