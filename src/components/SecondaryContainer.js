import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="pl-12 bg-black">
        <div className="mt-0 md:-mt-52 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>

        <MovieList title={"Trending"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
      </div>
    )
  );
};

export default SecondaryContainer;
