// 파일: src/components/Footer/Footer.jsx
import Image from "next/image";
import * as styles from "./Footer.css.js";

export default function Footer() {
  return (
    <footer className={styles.container} aria-label="TMDB 출처">
      <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
        <Image
          src="/images/tmdb-logo.svg"
          width={70}
          height={50}
          alt="The Movie Database (TMDB)"
          className={styles.logo}
        />
      </a>
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
}
