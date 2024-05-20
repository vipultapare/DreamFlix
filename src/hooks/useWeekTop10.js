import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addWeekTop10 } from "../Utils/movieSlice";


const useWeekTop10 = ()=>{

  const dispatch = useDispatch();
  const week10 = useSelector(store => store?.movies?.weekTop10);

  const getWeekTop10 =async() =>{

    const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
  try {
    const response = await fetch(url, options);
    const result = await response.json();
   
    dispatch(addWeekTop10(result.data));
  } catch (error) {
    console.error(error);
  }

  }

  useEffect(()=>{
    if(!week10)
      {
        getWeekTop10();
      }
  
  },[]);
  

}

export default useWeekTop10;