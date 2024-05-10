import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice(
  {
    name:"movies",
    initialState: {
      fanFavMovies:null,
      weekTop10:null,
    },
    reducers:{
      addFanFavMovies:(state,action) =>{
        state.fanFavMovies = action.payload;
      },
      addWeekTop10:(state,action) =>{
        state.weekTop10 = action.payload;
      }
    }

  }
);

export const {addFanFavMovies,addWeekTop10} = movieSlice.actions;
export default movieSlice.reducer;