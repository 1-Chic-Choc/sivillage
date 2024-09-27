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
        "font-[500] text-[18px] text-center",
        "leading-[normal]",
      )}
    >
      {pathname === "/sign-in" && "로그인"}
      {pathname === "/sign-up" && "온라인 간편가입"}
      {pathname === "/oauth" && "계정 연동하기"}
    </Link>
  );
}
