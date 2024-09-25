"use client";

import { usePathname } from "next/navigation";

export default function PathText() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/sign-in" && "로그인"}
      {pathname === "/sign-up" && "온라인 간편가입"}
    </>
  );
}
