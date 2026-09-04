// src/components/layouts/SearchLayout/SearchLayout.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./SearchLayout.css.js";

export default function SearchLayout({ children }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = search.trim();
    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          aria-label="영화 검색어"
          className={styles.input}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="검색어를 입력하세요..."
        />
        <button type="submit" className={styles.button}>
          검색
        </button>
      </form>
      {children}
    </>
  );
}
