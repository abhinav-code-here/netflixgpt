import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        {/* md:w-screen aspect-video */}
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
