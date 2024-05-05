import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice(
  {
    name:"movies",
    initialState: {
      fanFavMovies:null,
    },
    reducers:{
      addFanFavMovies:(state,action) =>{
        state.fanFavMovies = action.payload;
      }
    }

  }
);

export const {addFanFavMovies} = movieSlice.actions;
export default movieSlice.reducer;