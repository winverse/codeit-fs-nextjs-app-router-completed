// 파일: src/components/MovieDetail/MovieDetail.jsx
import Image from "next/image";
import * as styles from "./MovieDetail.css.js";

export default function MovieDetail({
  title,
  tagline,
  overview,
  releaseDate,
  genres,
  runtime,
  posterPath,
  voteAverage,
  reviews = [],
}) {
  const hasPoster = Boolean(posterPath);
  const coverStyle = hasPoster
    ? { backgroundImage: `url('${posterPath}')` }
    : {};
  const releaseLabel = releaseDate || "개봉일 정보 없음";
  const runtimeLabel = Number.isFinite(runtime)
    ? `${runtime}분`
    : "상영 시간 정보 없음";
  const voteLabel = Number.isFinite(voteAverage)
    ? voteAverage.toFixed(1)
    : "평점 정보 없음";

  return (
    <div className={styles.container}>
      <div
        className={styles.coverImgContainer}
        style={coverStyle}
      >
        {hasPoster ? (
          <Image
            src={posterPath}
            width={240}
            height={350}
            alt={title}
            className={styles.coverImg}
          />
        ) : (
          <div
            className={styles.coverPlaceholder}
            aria-label="포스터 없음"
          />
        )}
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.title}>{title}</div>
        <div>
          {releaseLabel} | {genres.map((genre) => genre.name).join(", ")} |{" "}
          {runtimeLabel} | ⭐ {voteLabel}
        </div>
        {tagline && <div className={styles.tagline}>{tagline}</div>}
        <div className={styles.overview}>
          {overview || "줄거리 정보가 없습니다."}
        </div>
        <section className={styles.reviewSection}>
          <h2>리뷰</h2>
          {reviews.length > 0 ? (
            <ul className={styles.reviewList}>
              {reviews.map((review) => (
                <li key={review.id} className={styles.reviewItem}>
                  <strong>{review.author}</strong>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>아직 작성된 리뷰가 없습니다.</p>
          )}
        </section>
      </div>
    </div>
  );
}
