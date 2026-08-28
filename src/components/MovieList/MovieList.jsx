// 파일: src/components/MovieList/MovieList.jsx
"use client";

import { use, useState } from "react";
import MovieItem from "@/components/MovieItem";

export default function MovieList({ moviesPromise, limit, className }) {
  const { movies } = use(moviesPromise);
  const [sortByRating, setSortByRating] = useState(false);
  const limitedMovies =
    typeof limit === "number" ? movies.slice(0, limit) : movies;
  const visibleMovies = sortByRating
    ? [...limitedMovies].sort(
        (a, b) => (b.voteAverage ?? 0) - (a.voteAverage ?? 0),
      )
    : limitedMovies;

  return (
    <>
      <button
        type="button"
        aria-pressed={sortByRating}
        onClick={() => setSortByRating((current) => !current)}
      >
        {sortByRating ? "기본순으로 보기" : "평점순으로 보기"}
      </button>
      <div className={className}>
        {visibleMovies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
