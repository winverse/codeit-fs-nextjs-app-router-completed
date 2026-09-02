# NEXT CINEMA 완성본

27번 토픽 **NextJS로 웹 사이트 만들기(app-router)**의 누적 실습을 끝까지 적용한 완성본입니다. Pages Router로 만들었던 영화 앱을 App Router 구조로 옮기면서 서버 컴포넌트, 중첩 레이아웃, 스트리밍과 캐시를 함께 확인합니다.

## 무엇을 만드나요?

- 공통 헤더·검색바·TMDB 출처 푸터가 있는 중첩 레이아웃
- 현재 상영작과 인기 영화를 보여 주는 홈 화면
- URL 쿼리 스트링과 연결된 영화 검색
- 영화 정보와 기존 리뷰를 보여 주는 상세 화면
- 존재하지 않는 영화를 처리하는 404 화면
- Server Function을 사용하는 리뷰 작성 폼
- `Suspense`와 스켈레톤 UI를 이용한 로딩 상태
- Cache Components와 `use cache`를 이용한 인기 영화 캐시
- 오류 경계와 다시 시도 UI

## 주요 화면

| URL                         | 확인할 결과                         |
| --------------------------- | ----------------------------------- |
| `/`                         | 현재 상영작과 인기 영화 목록        |
| `/search?q=검색어`          | 검색어와 일치하는 영화 목록         |
| `/movies/:id`               | 영화 상세 정보, 리뷰 목록과 작성 폼 |
| 존재하지 않는 `/movies/:id` | 영화 전용 404 화면                  |

## 실행하기

이 앱을 실행하려면 Node.js 24 이상과 pnpm이 필요합니다.

또한 `codeit-fs-nextjs-backend-support` 지원 서버가 `http://localhost:5005`에서 실행 중이어야 합니다.

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

영화 데이터와 이미지는 TMDB API에서 가져옵니다. 이 프로젝트는 TMDB의 보증이나 인증을 받은 제품이 아닙니다.
