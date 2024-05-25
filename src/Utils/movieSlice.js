import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice(
  {
    name:"movies",
    initialState: {
      fanFavMovies:null,
      weekTop10:null,
      searchMovie:null,
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
      addSearchMovie:(state,action)=>{
        state.searchMovie = action.payload;
      },
      deleteSearchMovie:(state,action) =>{
        state.searchMovie = null;
      },
     
     
      
      
    }

  }
);

export const {addFanFavMovies,addWeekTop10, addWeekStream,addSearchMovie ,deleteSearchMovie} = movieSlice.actions;
export default movieSlice.reducer;