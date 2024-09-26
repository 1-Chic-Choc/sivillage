"use server";
import { commonResType } from "@/types/ResponseTypes";
import { revalidateTag } from "next/cache";

// export async function getCartData(token: string) {
//   'use server';
//   const response = await fetch('/api/cart', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//   });
//   const data = await response.json();
//   return data.result;
// }

export async function deleteCartItem(id: string) {
  "use server";
  const response = await fetch(`http://localhost:3100/carts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("deleteCart");
}

export async function deleteCartList(ids: string[]): Promise<boolean> {
  "use server";
  console.log("ids", ids);
  const deletePromises = ids.map(
    async (id) =>
      await fetch(`http://localhost:3100/carts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
  );

  const responses = await Promise.all(deletePromises);
  revalidateTag("deleteCart");
  console.log("responses", responses);

  return false;
}
