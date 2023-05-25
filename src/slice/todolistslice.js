import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
    initialState: [],
    name: "todo",
    reducers: {
        savedetails: (state, action) => [...state, { Name: action.payload, id: state.length, status: "pending" }],


        changemystatus: (state, action) => {
        //    let a=state.map((e) => e);
        //     console.log(state);



            state.map((e, i) => {

                if (i == action.payload) {
                    (e.status === "pending") ? e.status = "complete" : e.status = "pending"
                }

            })
        }

    }

})