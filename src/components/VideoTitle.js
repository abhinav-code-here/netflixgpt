import React from "react";
import { INFO_BUTTON, PLAY_BUTTON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6  md:pt-[22.5%] md:px-36 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex justify-between w-1/4">
        <button className="flex bg-white text-black text-lg p-4 px-10 rounded-md hover:bg-opacity-90">
          <span>
            <img className="w-5 pt-1" src={PLAY_BUTTON} alt="Play" />
          </span>
          <span className="px-2 text-2xl">Play</span>
        </button>
        <button className="flex bg-gray-700 text-white text-lg p-4 px-10 bg-opacity-30 rounded-md hover:bg-opacity-80">
          <span>
            <img className="w-8 bg-opacity-10" src={INFO_BUTTON} alt="Play" />
          </span>
          <span className="hidden md:inline-block px-2 text-2xl">
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
