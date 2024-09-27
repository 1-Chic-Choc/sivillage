"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  cartItemType,
  commonResType,
  ProductDataType,
  ProductOptionDataType,
} from "@/types/ResponseTypes";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export async function getMyData(path: string): Promise<number> {
  let apiUrl = "";

  console.log(path);
  switch (path) {
    case "mypage/point":
      apiUrl = "point";
      break;
    case "mypage/e-point":
      apiUrl = "e-point";
      break;
    case "mypage/coupon":
      apiUrl = "my-coupon";
      break;
    default:
      break;
  }

  // const response = await fetch(`${process.env.API_BASE_URL}/api/v1/${apiUrl}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  // });
  // if (!response.ok) {
  //   throw new Error('Failed to fetch');
  // }
  // const data = (await response.json()) as commonResType;
  // const myData = data.data as myDataType;

  let myData = 0;
  if (path === "/mypage/point") {
    myData = 1000;
  } else if (path === "/mypage/e-point") {
    myData = 2000;
  } else if (path === "/mypage/coupon") {
    myData = 3;
  }

  // console.log(myData);

  return myData;
}

export const getCartItemCountByUser = async (
  token: string,
): Promise<number> => {
  "use server";
  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/count`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  //   next: { tags: ['cartCount'] },
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch cart count');
  // }
  const res = await fetch("http://localhost:3100/carts", {
    method: "GET",
    next: { tags: ["cartCount"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch cart item list");
  }
  const data = await res.json();
  // console.log('data', data);
  return data.length;
};

// export async function fetchCartItemList(): Promise<cartItemType> {
//   const res = await fetch("http://localhost:3100/carts", {
//     method: "GET",
//     next: { tags: ["checkCart, addCart, cartCount, deleteCart"] },
//     cache: "no-cache",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch cart item list");
//   }
//   // console.log('res', res);
//   const data = await res.json();
//   const response: cartItemDataType = {
//     totalPrice: data
//       .filter((item: cartItemType) => item.isChecked)
//       .reduce(
//         (acc: number, item: cartItemType) => acc + item.price * item.quantity,
//         0,
//       ),
//     disCountTotalPrice: data
//       .filter((item: cartItemType) => item.isChecked)
//       .reduce(
//         (acc: number, item: cartItemType) =>
//           acc + item.price * item.quantity * 0.1,
//         0,
//       ),
//     shippingFee: 3000,
//     cartItemList: data,
//   };
//   return response;
// }

export async function getCartData(): Promise<cartItemType[]> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`; // 실제 API 엔드포인트로 변경 필요

  console.log(apiUrl);
  const session = await getServerSession(options);

  const token = session?.user?.accssToken;
  console.log(session);

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
  productOptionUuid: String,
): Promise<ProductOptionDataType[]> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/products/option/${productOptionUuid}`;
  const session = await getServerSession(options);

  console.log(apiUrl);

  const token = session?.user?.accssToken;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  const res = (await response.json()) as commonResType<ProductOptionDataType[]>;
  const data = res.result ?? [];

  console.log("data:", JSON.stringify(data, null, 2));
  return data;
}

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

// export async function deleteCartItem(cartUuids: { cartUuid: string }[]) {
//   "use server";

//   // API URL 정의
//   const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`;
//   console.log("API URL:", apiUrl); // URL 로그 출력하여 확인

//   try {
//     // DELETE 요청 보내기
//     const response = await fetch(apiUrl, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(cartUuids), // 요청 본문에 cartUuid 배열을 전송
//     });

//     // 응답 상태가 성공적인지 확인
//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Error data:", errorData);
//       throw new Error(
//         `Failed to delete cart items: ${response.status} ${errorData.message}`,
//       );
//     }

//     // 응답 데이터 로깅 (성공적인 경우)
//     const data = await response.json();
//     console.log("Response:", data);

//     // 데이터 변경 사항 반영을 위한 캐시 무효화
//     revalidateTag("deleteCart");

//     return data; // 성공적인 응답 반환
//   } catch (error) {
//     console.error("Error deleting cart item:", error); // 에러 처리
//     throw error;
//   }
// }

// export async function deleteCartItem(cartUuids: { cartUuid: string }[]) {
//   "use server";

//   const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart`;
//   console.log("API URL:", apiUrl);

//   const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/cart`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(cartUuids),
//   });

//   revalidateTag("deleteCart");
// }

// export async function deleteCartList(ids: string[]): Promise<boolean> {
//   "use server";
//   console.log("ids", ids);
//   const deletePromises = ids.map(
//     async (id) =>
//       await fetch(`http://localhost:3100/carts/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//   );
// }

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
