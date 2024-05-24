import React from "react";
import MovieCards from "./MovieCards";
import { useDispatch } from "react-redux";

const MovieListThree = ({ title, movies }) => {
  const dispatch = useDispatch();
  const handleHome = () => {
    dispatch();
  };
  return (
    movies && (
      <div className="pt-10 bg-cyan-400 flex flex-col">
        <button
          className=" bg-green-400 hover:bg-green-800 font-semibold text-blue-950 rounded-3xl p-3"
          onClick={handleHome}
        >
          HOME
        </button>
        <h1 className="text-3xl font-bold py-6 pl-4 text-black font-serif">
          {title}
        </h1>

        <div className="overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCards
                key={movie?.id}
                title={movie?.title}
                url={movie?.image}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieListThree;
