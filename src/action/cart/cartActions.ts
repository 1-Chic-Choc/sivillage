"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  BrandDataType,
  cartItemType,
  ColorDataType,
  commonResType,
  MediaDataType,
  ProductDataType,
  productMediaType,
  ProductOptionDataType,
  SizeDataType,
} from "@/types/ResponseTypes";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export async function getCartData(
  unsignedMemberUuid: String,
): Promise<cartItemType[]> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`; // 실제 API 엔드포인트로 변경 필요

  console.log(apiUrl);
  const session = await getServerSession(options);

  const token = session?.user?.accssToken;
  console.log("session:", JSON.stringify(session, null, 2));

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("fail");
  }

  const res = (await response.json()) as commonResType<cartItemType[]>;
  const data = res.result;

  return data;
}

export async function getProductData(
  productUuid: String,
): Promise<ProductDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/products/one/${productUuid}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<ProductDataType>;
  const data = res.result;

  // console.log("data:", JSON.stringify(data, null, 1));
  return data;
}

// export async function getProductData(
//   productOptionUuid: String,
// ): Promise<ProductOptionDataType[]> {
//   const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/products/option/${productOptionUuid}`;
//   const session = await getServerSession(options);

//   console.log(apiUrl);

//   const token = session?.user?.accssToken;
//   const response = await fetch(apiUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   console.log(response);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch product data. Status: ${response.status}`);
//   }

//   const res = (await response.json()) as commonResType<ProductOptionDataType[]>;
//   const data = res.result ?? [];

//   console.log("data:", JSON.stringify(data, null, 2));
//   return data;
// }

export const updateQuantity = async (items: {
  cartUuid: string;
  quantity: number;
}) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/v1/cart/quantity`, // 템플릿 리터럴로 수정
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      },
    );

    if (!res.ok) {
      const errorResponse = await res.text(); // 응답 본문을 텍스트로 받기
      throw new Error(
        `Failed to update quantity. Status: ${res.status}. Response: ${errorResponse}`, // 템플릿 리터럴로 수정
      );
    }

    const data = await res.json();
    if (!data || typeof data !== "object") {
      throw new Error("Unexpected response format");
    }

    return data.result;
  } catch (error: any) {
    console.error("Error updating quantity:", error);
    throw new Error(`Failed to update quantity: ${error.message || error}`); // 템플릿 리터럴로 수정
  }
};

// PUT API 요청을 사용한 cartCheckUpdate 함수
export const cartCheckUpdate = async (
  items: { cartUuid: string; isSelected: boolean }[],
) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/v1/cart/isSelected`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items), // 요청 본문에 데이터를 배열로 전송
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("select:" + data);
    return data; // 성공적으로 응답을 처리한 결과 반환
  } catch (error) {
    console.error("Error updating cart selection:", error);
    throw error;
  }
};

export async function deleteCartItem(cartUuids: { cartUuid: string }[]) {
  "use server";

  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`;
  console.log("API URL:", apiUrl);

  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartUuids),
  });

  revalidateTag("deleteCart");
}

export async function deleteCartList(cartUuid: string[]): Promise<boolean> {
  "use server";

  try {
    // 각 항목에 대해 DELETE 요청을 보냄
    const deletePromises = cartUuid.map(async (id) => {
      const response = await fetch(
        `${process.env.BACKEND_BASE_URL}/api/v1/cart/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // 요청이 성공했는지 확인
      if (!response.ok) {
        throw new Error(`Failed to delete item with UUID: ${id}`);
      }
    });

    // 모든 요청이 성공했는지 확인
    await Promise.all(deletePromises);

    return true; // 모든 요청이 성공하면 true 반환
  } catch (error) {
    console.error("Error deleting cart items:", error);
    return false; // 에러가 발생하면 false 반환
  }
}

export const addCartItem = async (item: cartItemType): Promise<boolean> => {
  "use server";
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartUuid: item.cartUuid,
      productUuid: item.productOptionUuid,
      productOptionUuid: item.productOptionUuid,
      amount: item.quantity,
      isSelected: item.isSelected,
    }),
  });

  if (!res.ok) {
    return false;
  }
  revalidateTag("cartCount");
  return true;
};

export async function getBrandName(brandUuid: String): Promise<BrandDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/brand/${brandUuid}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<BrandDataType>;
  const data = res.result;

  // console.log("data:", JSON.stringify(data, null, 1));
  return data;
}

export async function getMeida(mediaId: Number): Promise<MediaDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/media/${mediaId}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<MediaDataType>;
  const data = res.result;

  return data;
}

export async function getSizeName(sizeId: Number): Promise<SizeDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/sizes/${sizeId}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<SizeDataType>;
  const data = res.result;

  // console.log("data:", JSON.stringify(data, null, 1));
  return data;
}

export async function getColorName(colorId: Number): Promise<ColorDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/colors/${colorId}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<ColorDataType>;
  const data = res.result;

  // console.log("data:", JSON.stringify(data, null, 1));
  return data;
}

export async function getProductOptionData(
  productOptionUuid: String,
): Promise<ProductOptionDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/products/option/${productOptionUuid}`;

  // console.log(apiUrl);
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  const res = (await response.json()) as commonResType<ProductOptionDataType>;
  const data = res.result ?? [];

  // console.log("data:", JSON.stringify(data, null, 2));
  return data;
}

export async function getProductMedia(
  productOptionUuid: String,
): Promise<productMediaType[]> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/product-media/${productOptionUuid}`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<productMediaType[]>;
  const data = res.result;

  return data;
}
