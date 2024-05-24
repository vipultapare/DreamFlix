import React from "react";
import MovieListThree from "./MovieListThree";

const SearchContainer = ({ title, movies }) => {
  return (
    <div>
      <MovieListThree title={title} movies={movies} />
    </div>
  );
};

export default SearchContainer;
