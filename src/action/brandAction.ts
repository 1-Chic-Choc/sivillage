import { BrandApiResponse } from "@/types/ResponseTypes";

// 브랜드 목록을 가져오는 API 함수
export async function fetchBrandList(): Promise<BrandApiResponse> {
  const apiUrl = "https://sivillage.shop/api/v1/brand"; // 환경 변수에서 URL 가져오기

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
    const res = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/v1/brand/like/${brandUuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

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
