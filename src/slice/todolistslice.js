import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice=createSlice({
    initialState:[],
    name:"todo",
    reducers:{
        savedetails:(state,action)=>{
            let i={
               Name:action.payload,
               id:state.length,
               status:"pending"
            }
           return [...state,i];

        },
        changemystatus:(state,action)=>{
           
         state.map((e,i)=>{
           
             if(i==action.payload){
                
                (e.status==="pending")?e.status="complete": e.status="pending"
            
            

             }
            
        })
        return state;
        }

    }

})