// 파일: src/app/error.js
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다</h3>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
