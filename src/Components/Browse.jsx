import useFanMovies from "../hooks/useFanMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieCards from "./MovieCards";

const Browse = () => {
  useFanMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <MovieCards />
    </div>
  );
};

export default Browse;
