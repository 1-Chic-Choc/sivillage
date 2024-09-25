"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function OauthSignInLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  return <Link href={`/sign-in?${params}`}>{children}</Link>;
}
