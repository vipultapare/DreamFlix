import React from "react";
import MovieCards from "./MovieCards";

const MovieListTwo = ({ title, movies }) => {
  return (
    movies && (
      <div className="pt-6">
        <h1 className="text-3xl font-bold py-6 pl-4 text-white font-serif">
          {title}
        </h1>

        <div className="overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies.map((movies) => (
              <MovieCards
                key={movies?.title?.id}
                title={movies?.title?.originalTitleText?.text}
                url={movies?.title?.primaryImage?.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieListTwo;
