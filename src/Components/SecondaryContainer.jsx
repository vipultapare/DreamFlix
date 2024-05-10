import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const fanFavMovies = useSelector((store) => store.movie?.fanFavMovies);
  const weekTop10 = useSelector((store) => store.movie?.weekTop10);
  console.log("Week Top Movies are");
  console.log(weekTop10);
  return (
    <div className="bg-gradient-to-br from-black">
      <MovieList title={"Week Top 10"} movies={weekTop10} />
      <MovieList title={"Fan's Favourite"} movies={fanFavMovies} />

      <MovieList title={"Fan Favourite"} movies={fanFavMovies} />
      <MovieList title={"Fan Favourite"} movies={fanFavMovies} />
    </div>
  );
};

export default SecondaryContainer;
