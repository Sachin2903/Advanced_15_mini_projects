import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../Slice/movieSlice";
export const store=configureStore({
     reducer:{
        movieslide:movieSlice.reducer
     }

})