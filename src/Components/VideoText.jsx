import React from "react";
import VideoContainer from "./VideoContainer";

const VideoText = ({ title, plot, rate }) => {
  return (
    <div className="w-screen aspect-video pt-3 md:pt-36 px-12  bg-gradient-to-r from-black absolute ">
      <h1 className=" text-3xl pt-4 md:pt-0 md:text-6xl text-cyan-800  font-bold font-serif">
        {title}
      </h1>
      <p className="hidden md:inline-block md:text-xl font-semibold w-96 mt-5 text-gray-400">
        {plot}
      </p>
      <h3 className=" text-lg font-bold mt-5 md:text-2xl text-cyan-600">
        {rate}/10
      </h3>
      <div className="flex mt-5 pb-10">
        <button className="bg-gradient-to-t from-cyan-500 to-cyan-800 p-2 md:p-4 px-6 md:px-12 text-sm md:text-xl text-white bg-opacity-50 rounded-lg hover:bg-gradient-to-t hover:from-cyan-950 ">
          Play
        </button>
        <button className=" mx-2 p-2 md:p-4 px-6 md:px-12 text-sm md:text-xl text-white bg-opacity-50 rounded-lg bg-gradient-to-t from-cyan-500 to-cyan-800 hover:bg-gradient-to-t hover:from-cyan-950">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoText;
