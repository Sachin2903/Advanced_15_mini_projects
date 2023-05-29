import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getAllMovies=createAsyncThunk("movies/fetchAllMovies",async()=>{

    const res=await fetch("https://www.omdbapi.com/?s=action&apikey=8422b38f");
    const movie=await res.json();
    return movie;
})



export const movieSlice=createSlice({
    initialState:{
        movieList:[],
        favouriteList:[]

    },
    name:"movieslide",
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllMovies.fulfilled,(state,action)=>{
            state.movieList=action.payload.Search
          
        })
        builder.addCase(getAllMovies.rejected,(state,action)=>{
          
        })
        builder.addCase(getAllMovies.pending,(state,action)=>{
          
        })
    }

})