import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Modules/cartSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default appStore;