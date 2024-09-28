import { BrandApiResponse } from "@/types/ResponseTypes";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

// 브랜드 목록을 가져오는 API 함수
export async function fetchBrandList(): Promise<BrandApiResponse> {
  const apiUrl = `https://sivillage.shop/api/v1/brand`; // 환경 변수에서 URL 가져오기

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 응답 상태가 성공적인지 확인
    if (!response.ok) {
      throw new Error(`Failed to fetch brand list: ${response.status}`);
    }

    // 응답을 JSON으로 변환
    const data: BrandApiResponse = await response.json();

    // 성공 여부 확인
    if (data.isSuccess) {
      console.log(data);
      return data; // 성공적인 응답 반환
    } else {
      throw new Error(`API Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error fetching brand list:", error);
    throw error;
  }
}

// /api/v1/brand/like/{brandUuid} 호출하는 함수
export const likeBrand = async (brandUuid: string) => {
  try {
    const session = await getServerSession(); // 인증된 세션을 가져옴
    if (!session) {
      throw new Error("로그인이 필요합니다.");
    }
    console.log("session:", JSON.stringify(session, null, 2));

    const token = session?.user?.accssToken;
    console.log("session:", token);
    const apiUrl = `https://sivillage.shop/api/v1/brand/like/${brandUuid}`;

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
      },
    });

    if (!res.ok) {
      const errorResponse = await res.text();
      throw new Error(
        `Failed to like brand. Status: ${res.status}. Response: ${errorResponse}`,
      );
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error liking brand:", error);
    throw new Error(`Failed to like brand: ${error.message || error}`);
  }
};

// export async function getCartData(): Promise<cartItemType[]> {
//   const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`; // 실제 API 엔드포인트로 변경 필요

//   console.log(apiUrl);
//   const session = await getServerSession(options);

//   const token = session?.user?.accssToken;
//   console.log("session:", JSON.stringify(session, null, 2));

//   const response = await fetch(apiUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("fail");
//   }

//   const res = (await response.json()) as commonResType<cartItemType[]>;
//   const data = res.result;

//   return data;
// }
