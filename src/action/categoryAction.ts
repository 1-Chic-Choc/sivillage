import { Category } from "@/types/ProductTypes";
import { CategpryListRequestType } from "@/types/RequestTypes";
import { CommonResType } from "@/types/ResponseTypes";

const headers = { "Content-Type": "application/json" };

export async function getCategoryList(
  req?: CategpryListRequestType,
): Promise<Category[] | null> {
  const method = "GET";
  const { parentId } = req || { parentId: "" };

  const res = await fetch(
    `https://sivillage.shop/api/v1/category?parentId=${parentId}`,
    {
      method,
      headers,
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as CommonResType<any>;
  console.log(data);
  if (data.httpStatus === "OK") {
    const { result } = data;
    return result;
  } else {
    return null;
  }
}
