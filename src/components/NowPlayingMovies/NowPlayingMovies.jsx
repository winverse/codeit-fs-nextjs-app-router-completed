// src/components/NowPlayingMovies/NowPlayingMovies.jsx
import { MovieList } from "@/components/MovieList";
import * as styles from "./NowPlayingMovies.css.js";

export const NOW_PLAYING_LIMIT = 3;

async function getNowPlayingMovies() {
  const response = await fetch(`${process.env.API_URL}/api/movies/now-playing`);

  if (!response.ok) {
    throw new Error("현재 상영 중인 영화를 불러오지 못했습니다.");
  }

  return response.json();
}

export default function NowPlayingMovies() {
  const moviesPromise = getNowPlayingMovies();

  return (
    <MovieList
      moviesPromise={moviesPromise}
      limit={NOW_PLAYING_LIMIT}
      className={styles.container}
    />
  );
}
