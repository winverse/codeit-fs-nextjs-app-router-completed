// src/components/PopularMovies/PopularMovies.jsx
import { MovieList } from "@/components/MovieList";
import { NOW_PLAYING_LIMIT } from "@/components/NowPlayingMovies";
import * as styles from "./PopularMovies.css.js";

const POPULAR_LIMIT = 10;

async function getPopularMovies() {
  const [response, nowPlayingResponse] = await Promise.all([
    fetch(`${process.env.API_URL}/api/movies`),
    fetch(`${process.env.API_URL}/api/movies/now-playing`),
  ]);

  if (!response.ok || !nowPlayingResponse.ok) {
    throw new Error("인기 영화를 불러오지 못했습니다.");
  }

  const [{ movies }, { movies: nowPlayingMovies }] = await Promise.all([
    response.json(),
    nowPlayingResponse.json(),
  ]);
  const shownIds = nowPlayingMovies
    .slice(0, NOW_PLAYING_LIMIT)
    .map((movie) => movie.id);

  return { movies: movies.filter((movie) => !shownIds.includes(movie.id)) };
}

export default function PopularMovies() {
  const moviesPromise = getPopularMovies();

  return (
    <MovieList
      moviesPromise={moviesPromise}
      limit={POPULAR_LIMIT}
      className={styles.container}
    />
  );
}
