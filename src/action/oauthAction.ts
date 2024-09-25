"use server";

import { UserInfoRequestType } from "@/types/RequestTypes";

const headers = { "Content-Type": "application/json" };

export async function oauthUserInfoAction(oauthData: UserInfoRequestType) {
  const method = "POST";
  const body = JSON.stringify(oauthData);

  return await fetch(
    `${process.env.BACKEND_BASE_URL}/apWi/v1/oauth/user-info`,
    {
      method,
      headers,
      body,
      cache: "no-cache",
    },
  );
}
