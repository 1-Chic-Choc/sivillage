"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PathText() {
  const pathname = usePathname();
  return (
    <Link
      href={{ pathname }}
      className={cn(
        "w-[calc(100%-190px)] h-[26px]",
        "font-[600] text-[18px] text-center",
        "leading-[normal] text-[#131922]",
      )}
    >
      {pathname === "/sign-in" && "로그인"}
      {pathname === "/sign-up" && "온라인 간편가입"}
      {pathname === "/oauth" && "계정 연동하기"}
      {pathname.startsWith("/search") &&
        `키워드 검색 - ${pathname.split("/")[2]}`}
      {pathname.startsWith("/promotion") && "Event"}
      {pathname.startsWith("/brand") && `${pathname.split("/")[2]}`}
    </Link>
  );
}
