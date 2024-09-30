import { options } from "@/app/api/auth/[...nextauth]/options";
import { commonResType, unsignedMemberDataType } from "@/types/ResponseTypes";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export async function getUnsisngedMemberUuid(): Promise<unsignedMemberDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/unsignedMember`; // 실제 API 엔드포인트로 변경 필요

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("fail");
  }

  const res = (await response.json()) as commonResType<unsignedMemberDataType>;
  // console.log("response", response);
  // const data = res.result;

  // const cookieStore = cookies().set("X-Unsigned-User-UUID", "")

  return res.result;
}

export async function updateUnsignedUser() {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/unsignedMember`; // 실제 API 엔드포인트로 변경 필요

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("fail");
  }

  console.log("upodate@@@@@@@@@@@");
}

export async function migrateCart(
  accessToken: string | null,
  unsignedUserUuid?: string,
) {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/cart/migrate`; // 실제 API 엔드포인트로 변경 필요

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-Unsigned-User-UUID": `${unsignedUserUuid}`,
    },
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error("fail");
  }

  console.log("migrate@@@@@@@@@@@");
}
