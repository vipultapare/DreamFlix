import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptContent from "./GptContent";

const Gpt = () => {
  console.log("GPT Search page");
  return (
    <div className=" h-screen bg-gradient-to-b from-blue-950 to-blue-600">
      <GptSearchBar />
      <GptContent />
    </div>
  );
};

export default Gpt;
