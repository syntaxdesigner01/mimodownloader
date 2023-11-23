import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

 const store =configureStore({
    reducer:dataSlice
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
