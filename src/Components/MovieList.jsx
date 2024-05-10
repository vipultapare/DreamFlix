import React from "react";
import MovieCards from "./MovieCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  return (
    movies && (
      <div className="pt-6">
        <h1 className="text-3xl font-bold py-6 pl-4 text-white font-serif">
          {title}
        </h1>

        <div className="overflow-x-scroll no-scrollbar">
          <div className="flex">
            {/* <Slider {...settings}> */}
            {movies.map((movies) => (
              <MovieCards
                key={movies.id}
                title={movies.originalTitleText.text}
                url={movies.primaryImage.imageUrl}
              />
            ))}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
