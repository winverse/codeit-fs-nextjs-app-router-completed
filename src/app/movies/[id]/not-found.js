// src/app/movies/[id]/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>영화를 찾을 수 없습니다.</h2>
      <Link href="/">영화 목록으로 돌아가기</Link>
    </div>
  );
}
