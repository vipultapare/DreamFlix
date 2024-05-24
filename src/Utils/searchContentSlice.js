import { createSlice } from '@reduxjs/toolkit'


const searchContentSlice = createSlice({
     name: 'searchContent',
     initialState: null,
     reducers:{
      addSearchContent:(state,action) =>{
        return action.payload;
      },
     }
})


export const{addSearchContent} = searchContentSlice.actions;
export default searchContentSlice.reducer;
