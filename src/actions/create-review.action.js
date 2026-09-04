// src/actions/create-review.action.js
"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(formData) {
  const rawMovieId = formData.get("movieId");
  const rawAuthor = formData.get("author");
  const rawContent = formData.get("content");

  const movieId = typeof rawMovieId === "string" ? Number(rawMovieId) : NaN;
  const author = typeof rawAuthor === "string" ? rawAuthor.trim() : "";
  const content = typeof rawContent === "string" ? rawContent.trim() : "";

  const isValid =
    Number.isSafeInteger(movieId) &&
    movieId > 0 &&
    author.length >= 1 &&
    author.length <= 50 &&
    content.length >= 1 &&
    content.length <= 1000;

  if (!isValid) {
    return {
      status: false,
      error: "입력값을 다시 확인해 주세요.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.API_URL}/api/movies/${movieId}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          content,
          rating: 5,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Review creation failed: ${response.status}`);
    }

    revalidatePath(`/movies/${movieId}`);

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: "리뷰를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.",
    };
  }
}
