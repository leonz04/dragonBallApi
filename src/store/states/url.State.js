import { createSlice } from "@reduxjs/toolkit";

const urlSlice=createSlice({
    name:'url',
    initialState:'https://dragonball-api.com/api/planets',
    reducers:{
        setUrl: (state,action)=>action.payload
        
    
    }
    

})

export const {setUrl}= urlSlice.actions

export default urlSlice.reducer