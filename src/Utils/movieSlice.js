import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice(
  {
    name:"movies",
    initialState: {
      fanFavMovies:null,
      weekTop10:null,
      
      weekStream:null,
      
    },
    reducers:{
      addFanFavMovies:(state,action) =>{
        state.fanFavMovies = action.payload;
      },
      addWeekTop10:(state,action) =>{
        state.weekTop10 = action.payload;
      },
      addWeekStream:(state,action) =>{
        state.weekStream = action.payload;
      },
      
    }

  }
);

export const {addFanFavMovies,addWeekTop10, addWeekStream} = movieSlice.actions;
export default movieSlice.reducer;