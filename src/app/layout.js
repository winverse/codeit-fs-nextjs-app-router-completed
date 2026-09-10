// src/app/layout.js
import "@/styles/reset.css.js";
import "@/styles/globals.css.js";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";

export const metadata = {
  title: "NEXT CINEMA",
  description: "영화 목록과 검색 결과를 확인하는 웹 사이트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
