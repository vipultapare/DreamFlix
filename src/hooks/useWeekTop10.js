import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addWeekTop10 } from "../Utils/movieSlice";


const useWeekTop10 = ()=>{

  const dispatch = useDispatch();

  const getWeekTop10 =async() =>{

    const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
    dispatch(addWeekTop10(result.data));
  } catch (error) {
    console.error(error);
  }

  }

  useEffect(()=>{
    getWeekTop10();
  },[]);
  

}

export default useWeekTop10;