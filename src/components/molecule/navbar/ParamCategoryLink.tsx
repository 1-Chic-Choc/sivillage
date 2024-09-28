"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ParamCategoryLink({
  href,
  text,
  is_current,
}: {
  href: string;
  text: string;
  is_current: boolean;
}) {
  const searchParams = useSearchParams();

  return (
    <Link
      href={href}
      className={cn(
        "h-[48px] mx-[9px]",
        "inline-flex flex-shrink-0 flex-wrap items-center",
        "overflow-hidden",
        text === "Home" && "px-[1px]",
      )}
      target={text === "SSG DF" ? "_blank" : ""}
      rel={text === "SSG DF" ? "noopener noreferrer" : ""}
    >
      <span
        className={cn(
          "text-[16px] font-[500] leading-[24px] tracking-[0.4px] text-nowrap",
          (!searchParams.get("categories") && text === "전체") ||
            searchParams.get("categories") === text
            ? "text-[#131922]"
            : "text-[#929292]",
        )}
      >
        {(!searchParams.get("categories") && text === "전체") ||
        searchParams.get("categories") === text ? (
          <strong>{text}</strong>
        ) : (
          text
        )}
      </span>
    </Link>
  );
}
