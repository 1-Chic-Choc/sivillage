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
