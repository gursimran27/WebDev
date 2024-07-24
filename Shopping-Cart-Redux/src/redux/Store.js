import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice"; //default export


export const store= configureStore(
    {
        reducer:{
            cart:cartSlice,
        }
    }
);