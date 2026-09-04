// src/components/PopularMovies/PopularMovies.jsx
import { MovieList } from "@/components/MovieList";
import * as styles from "./PopularMovies.css.js";

async function getPopularMovies() {
  "use cache";

  const response = await fetch(`${process.env.API_URL}/api/movies`);

  if (!response.ok) {
    throw new Error("인기 영화를 불러오지 못했습니다.");
  }

  return response.json();
}

export default function PopularMovies() {
  const moviesPromise = getPopularMovies();

  return (
    <MovieList moviesPromise={moviesPromise} className={styles.container} />
  );
}
