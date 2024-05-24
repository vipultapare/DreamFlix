import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchContent } from "../Utils/searchContentSlice";
import useSearchMovies from "../hooks/useSearchMovies";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const handleValue = (event) => {
    const name = event.target.value;
    setInputValue(name);
  };

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(addSearchContent(inputValue));
  };
  useSearchMovies();

  return (
    <div className="flex justify-center p-7 bg-gradient-to-t from-black to-gray-600 gap-4">
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={handleValue}
        className="p-2 text-white bg-zinc-950 border-solid rounded-2xl text-center"
        placeholder="Movie Name"
      />
      <button
        className="bg-green-400 hover:bg-green-800 text-white font-semibold p-4 rounded-2xl"
        onClick={handleSearch}
      >
        SEARCH🔍
      </button>
    </div>
  );
};

export default Search;
