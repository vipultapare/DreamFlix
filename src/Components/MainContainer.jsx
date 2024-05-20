import React from "react";
import { useSelector } from "react-redux";
import VideoText from "./VideoText";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.fanFavMovies);

  if (movies === null) {
    return;
  }

  const mainMovie = movies[0];

  const title = mainMovie.titleText.text;
  const rate = mainMovie.ratingsSummary.aggregateRating;

  const plot = mainMovie.plot.plotText.plainText;

  return (
    <div>
      <VideoText title={title} plot={plot} rate={rate} />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
