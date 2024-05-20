import React from "react";

const MovieCards = ({ title, url }) => {
  return (
    <div className="min-w-80 pl-4 h-70 p-4">
      <img
        className="w-60 h-60 rounded-xl hover:scale-105"
        src={url}
        alt={title}
      />
    </div>
  );
};

export default MovieCards;
