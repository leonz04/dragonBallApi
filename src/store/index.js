import { configureStore } from "@reduxjs/toolkit";
import showPlanets from "./states/listPlanets.state";
import url from "./states/url.State";

 
export default configureStore({
    reducer:{
        showPlanets,
        url


    }
})