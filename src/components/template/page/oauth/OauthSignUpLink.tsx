"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function OauthSignUpLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const params = useSearchParams();
  return (
    <Link href={`/sign-up?${params}`} className={className}>
      {children}
    </Link>
  );
}
