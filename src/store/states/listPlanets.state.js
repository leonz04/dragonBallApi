import { createSlice } from "@reduxjs/toolkit";

const planetSlice=createSlice({
    name:'showPlanets',
    initialState:[],
    reducers:{
        addPlanet: (state,action)=>[...state,action.payload],
        deletePlanet: (state,action)=> state.filter(prod=> prod.id!==action.payload)
    
    }
    

})

export const {addPlanet,deletePlanet}= planetSlice.actions

export default planetSlice.reducer