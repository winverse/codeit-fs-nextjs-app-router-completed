// 파일: src/app/movie/[id]/page.js
import { notFound } from "next/navigation";
import { Suspense } from "react";
import MovieDetail from "@/components/MovieDetail";
import ReviewEditor from "@/components/ReviewEditor";

async function MovieContent({ params }) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.API_URL}/api/movies/${id}`,
  );

  if (response.status === 404) notFound();
  if (!response.ok) {
    return <div>영화 정보를 불러올 수 없습니다.</div>;
  }

  const movie = await response.json();

  return (
    <div>
      <MovieDetail {...movie} />
      <ReviewEditor movieId={Number(id)} />
    </div>
  );
}

export default function MoviePage({ params }) {
  return (
    <Suspense fallback={<div>영화 정보를 불러오는 중...</div>}>
      <MovieContent params={params} />
    </Suspense>
  );
}
