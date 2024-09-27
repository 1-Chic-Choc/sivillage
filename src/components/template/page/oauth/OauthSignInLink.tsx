"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function OauthSignInLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const params = useSearchParams();
  return (
    <Link href={`/sign-in?${params}`} className={className}>
      {children}
    </Link>
  );
}
