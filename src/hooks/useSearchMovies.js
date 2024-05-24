import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovie } from "../Utils/movieSlice";


const useSearchMovies = () => {

  const dispatch = useDispatch();
  const getSearchMovies = useSelector(store => store?.movies?.searchMovies);

  const data = useSelector((store) => store.searchContent);
  
  
  const getSearchMovie = async() =>{
    if(data != null)
      {
        const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${data}`;
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          
         //console.log(result);
          dispatch(addSearchMovie(result.data));
        } catch (error) {
          console.error(error);
        }
        }
      }
    

  useEffect(() =>{
    if(!getSearchMovies)
      {
        getSearchMovie();
      }
    },[data]);


  
   


  
  
}

export default useSearchMovies
