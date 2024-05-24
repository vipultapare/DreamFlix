import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from './searchSlice';
import searchContentReducer from './searchContentSlice';
import searchMovieReducer from './movieSlice';



const appStore = configureStore(
  {
    reducer:{
       user:userReducer,
       movie:movieReducer,
       search:searchReducer,
       searchMovie:searchMovieReducer,
       searchContent:searchContentReducer,

    }
  }
)

export default appStore;