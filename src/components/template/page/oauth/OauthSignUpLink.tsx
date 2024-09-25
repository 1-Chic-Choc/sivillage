"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function OauthSignUpLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  return <Link href={`/sign-up?${params}`}>{children}</Link>;
}
