import useFanMovies from "../hooks/useFanMovies";
import useWeekTop10 from "../hooks/useWeekTop10";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useWeekStream from "../hooks/useWeekStream";
import Search from "./Search";
import { useSelector } from "react-redux";
import SearchContainer from "./SearchContainer";
import useSearchMovies from "../hooks/useSearchMovies";

const Browse = () => {
  useFanMovies();
  useWeekTop10();

  useWeekStream();
  const searchMovies = useSelector((store) => store.movie.searchMovie);

  console.log(searchMovies);
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Header />

      {searchMovies ? (
        <SearchContainer title={"Search Results"} movies={searchMovies} />
      ) : (
        <>
          <MainContainer />
          <Search />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
