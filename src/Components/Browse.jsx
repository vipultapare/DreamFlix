import useFanMovies from "../hooks/useFanMovies";
import useWeekTop10 from "../hooks/useWeekTop10";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useWeekStream from "../hooks/useWeekStream";

const Browse = () => {
  useFanMovies();
  useWeekTop10();

  useWeekStream();

  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
