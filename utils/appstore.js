import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";


const appStore = configureStore({
    reducer:{
        cart:cartslice
    }
});

export default appStore;