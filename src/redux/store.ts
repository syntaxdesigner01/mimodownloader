import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice";
storeSlice

export const  store=configureStore({
    reducer:{
        storeSlice:storeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch