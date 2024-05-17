import { useSelector } from "react-redux";
import useFanMovies from "../hooks/useFanMovies";
import useWeekTop10 from "../hooks/useWeekTop10";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import Gpt from "./Gpt";

const Browse = () => {
  useFanMovies();
  useWeekTop10();

  //const showGptPage = useSelector((store) => store?.gpt?.showGptSearch);
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Header />
      {/* {showGptPage ? (
        <Gpt />
      ) : (
        <> */}
      <MainContainer />
      <SecondaryContainer />
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default Browse;
