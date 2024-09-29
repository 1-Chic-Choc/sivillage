"use server";

import { commonResType, unsignedMemberDataType } from "@/types/ResponseTypes";

export async function getUnsignedMemberData(): Promise<unsignedMemberDataType> {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/unsignedMember`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = (await response.json()) as commonResType<unsignedMemberDataType>;
  const data = res.result;

  console.log("unsignedUserUUID:", data);

  return data;
}

export async function updateUnsignedMemberData(unsignedMemberUuid: String) {
  const apiUrl = `${process.env.BACKEND_BASE_URL}/api/v1/unsignedMember`;

  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Unsigned-User-UUID": `${unsignedMemberUuid}`,
    },
  });

  // const headers = response.headers;

  // const unsignedUserUUID = response.headers.get("x-unsigned-user-uuid");

  // const res = (await response.json()) as commonResType<unsignedMemberDataType>;
  // const data = res.result;

  // console.log("unsignedUserUUID:", unsignedUserUUID);

  // return unsignedUserUUID;
}
