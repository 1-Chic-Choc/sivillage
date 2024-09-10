import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 예: 요청의 pathname과 query parameters를 로그에 기록하기
  const pathname = request.nextUrl.pathname;
  const query = request.nextUrl.searchParams.toString();

  const response = NextResponse.next();
  response.headers.set("siv-pathname", pathname); // 헤더에 pathname 추가
  response.headers.set("siv-query", query); // 헤더에 query 파라미터 추가

  return response;
}

// export const config = {
//   matcher: ['/*'], // Middleware를 적용할 경로를 설정
// };
