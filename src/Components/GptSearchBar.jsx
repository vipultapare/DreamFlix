import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[5%] flex justify-center rounded-xl">
      <form action="" className="w-1/2 bg-black grid grid-cols-12 rounded-xl">
        <input
          className="p-4 m-4 rounded-lg  col-span-9 text-black font-semibold"
          type="text"
          placeholder="What Do You Want To Watch Today?"
        />
        <button className="py-2 px-4 bg-slate-400 rounded-lg col-span-3 m-4  text-white font-semibold bg-blue-900 hover:bg-gradient-to-bl hover:from-green-400 hover:to-green-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
