"use server";

import { SignInRequestType, SignUpResquestType } from "@/types/RequestTypes";

export async function signInAction(credentials: SignInRequestType) {
  const method = "POST";
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(credentials);

  return await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/auth/sign-in`, {
    method,
    headers,
    body,
    cache: "no-cache",
  });
}

export async function signUpAction(signUpData: SignUpResquestType) {
  const method = "POST";
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(signUpData);

  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/v1/auth/sign-up`,
    {
      method,
      headers,
      body,
      cache: "no-cache",
    },
  );

  const data = await res.json();
  console.log(data);
  if (data?.httpStatus === "OK") {
    return data.result;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
}