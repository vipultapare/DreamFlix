import { useEffect } from 'react'
import { WeekStreamUrl, options } from '../Utils/constant';
import {addWeekStream} from '../Utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useWeekStream = () => {

  const dispatch = useDispatch();
  const weekStream = useSelector(store => store?.movies?.weekStream); 
  const getNetflix = async()=>{
    try {
      const response = await fetch(WeekStreamUrl, options);
      const result = await response.json();
    
      dispatch(addWeekStream(result.data));
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    if(!weekStream)
      {
        getNetflix();
      }
  
  },[])
  
}

export default useWeekStream
