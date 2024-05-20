import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieListTwo from "./MovieListTwo";

const SecondaryContainer = () => {
  const fanFavMovies = useSelector((store) => store.movie?.fanFavMovies);
  const weekTop10 = useSelector((store) => store.movie?.weekTop10);

  const weekStream = useSelector((store) => store.movie?.weekStream);

  return (
    <div className="bg-gradient-to-br from-black mt-4 md:mt-0">
      <MovieList title={"Week Top 10"} movies={weekTop10} />

      <MovieList title={"Fan's Favourite"} movies={fanFavMovies} />

      {weekStream ? (
        <>
          <MovieListTwo
            title={"Now Streaming On Prime"}
            movies={weekStream[0].edges}
          />
          <MovieListTwo
            title={"Now Streaming On Netflix"}
            movies={weekStream[1].edges}
          />
          <MovieListTwo
            title={"Now Streaming On Apple TV+"}
            movies={weekStream[2].edges}
          />
          <MovieListTwo
            title={"Now Streaming On Hulu"}
            movies={weekStream[3].edges}
          />
          <MovieListTwo
            title={"Now Streaming On Max"}
            movies={weekStream[4].edges}
          />
          <MovieListTwo
            title={"Now Streaming On Peacock"}
            movies={weekStream[5].edges}
          />
        </>
      ) : (
        <MovieList title={"Fan's Favourite"} movies={fanFavMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
