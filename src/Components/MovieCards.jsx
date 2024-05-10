import React from "react";

const MovieCards = ({ title, url }) => {
  return (
    <div className="min-w-80 pl-4 h-70 p-4">
      <img
        className="w-60 h-60 rounded-xl hover:scale-105"
        src={url}
        alt={title}
      />
      {/* <h4 className="font-semibold text-cyan-500 flex justify-center">
        {title}
      </h4> */}
    </div>
  );
};

export default MovieCards;
