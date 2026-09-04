// src/app/(with-searchbar)/search/page.js
import { Suspense } from "react";
import { MovieItem } from "@/components/MovieItem";
import { MovieListSkeleton } from "@/components/MovieListSkeleton";
import * as styles from "@/styles/search.css.js";

async function SearchResult({ keyword }) {
  if (!keyword) return <div>검색어를 입력하세요.</div>;

  const response = await fetch(
    `${process.env.API_URL}/api/movies/search?q=${encodeURIComponent(keyword)}`,
  );
  if (!response.ok) {
    return <div>검색 과정에서 오류가 발생했습니다.</div>;
  }

  const { movies } = await response.json();

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

async function SearchContent({ searchParams }) {
  const { q = "" } = await searchParams;
  const keyword = typeof q === "string" ? q : "";
  const trimmed = keyword.trim();

  return (
    <Suspense key={trimmed} fallback={<MovieListSkeleton count={3} />}>
      <SearchResult keyword={trimmed} />
    </Suspense>
  );
}

export default function SearchPage({ searchParams }) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<MovieListSkeleton count={3} />}>
        <SearchContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
