import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addFanFavMovies } from "../Utils/movieSlice";

const useFanMovies = ()=>{
  const dispatch = useDispatch();
  const getFanFavMovies = async() =>{
    
    const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data.list);
      dispatch(addFanFavMovies(result.data.list));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getFanFavMovies();
  },[]);


}

export default useFanMovies;