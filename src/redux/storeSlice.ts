import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type response ={
    link:string,
    title:string,
    process:number,
    duration:number,
    status:string,
    msg:string
}

const initialState:response ={
    link:'',
    title:'',
    process:0,
    duration:0,
    status:'',
    msg:'success'
}

export const storeSlice =createSlice({
    name:'storeSlice',
    initialState,
    reducers:{
        saveRep:(state,action:PayloadAction<response>)=>{
            const {payload} = action

            state = payload
        }
    }
})

export const { saveRep } = storeSlice.actions
export default storeSlice.reducer