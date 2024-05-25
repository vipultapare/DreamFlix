import { createSlice } from '@reduxjs/toolkit'


const searchContentSlice = createSlice({
     name: 'searchContent',
     initialState: null,
     reducers:{
      addSearchContent:(state,action) =>{
        return action.payload;
      },
      removeSearchContent: (state,action) =>{
        return null;
      }
     }
})


export const{addSearchContent,removeSearchContent} = searchContentSlice.actions;
export default searchContentSlice.reducer;
