// 파일: src/components/layouts/SearchLayout/SearchLayout.jsx
"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./SearchLayout.css.js";

function SearchForm({ initialSearch }) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    const next = search.trim();
    if (!next || initialSearch === next) return;

    router.push(`/search?q=${encodeURIComponent(next)}`);
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;
    onSubmit();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력하세요..."
      />
      <button className={styles.button} onClick={onSubmit}>
        검색
      </button>
    </div>
  );
}

function SearchBar() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  return <SearchForm key={q} initialSearch={q} />;
}

export default function SearchLayout({ children }) {
  return (
    <>
      <Suspense fallback={<div>검색바를 불러오는 중...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
