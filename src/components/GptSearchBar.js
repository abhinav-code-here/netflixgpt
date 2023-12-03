import React, { useEffect, useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import axios from "axios";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
        },
      }
    );
    // const json = await data.json();
    console.log(data);
    return data?.data?.results;
  };
  const [searchButtonState, setSearchButtonState] = useState(false);
  async function getChatGptData() {
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ",only give me names of 5 movies , comma separated like the example result given ahead . Example Result: Gadar, Sholay , Don , 3 idiots , Koi Mil Gaya ";
    const data = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    setSearchButtonState(false);
    console.log(data);

    const gptMovies = data?.data?.choices[0]?.message?.content.split(",");
    //search tmdb api for each movie
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(gptMovies);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }
  useEffect(() => {
    if (searchButtonState === true) {
      getChatGptData();
    }
  }, [searchButtonState]);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w=full md:w=1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button
          className="m-4 col-span-3 rounded-lg py-2 px-4 bg-red-700 text-white"
          onClick={() => {
            setSearchButtonState(true);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
