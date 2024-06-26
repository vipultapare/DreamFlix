import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFanFavMovies } from "../Utils/movieSlice";

const useFanMovies = ()=>{
  const dispatch = useDispatch();

  const fanMovies = useSelector(store => store?.movies?.fanFavMovies);
  const getFanFavMovies = async() =>{
    
    const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
     
      dispatch(addFanFavMovies(result.data.list));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    if(!fanMovies)
      {
        getFanFavMovies();
      }
   
  },[]);


}

export default useFanMovies;