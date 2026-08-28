// 파일: src/util/delay.js
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
