import { configureStore } from "@reduxjs/toolkit";
import { todolistSlice } from "../../slice/todolistslice";
export const store=configureStore({
    reducer:{
      todo:todolistSlice.reducer
    },
})