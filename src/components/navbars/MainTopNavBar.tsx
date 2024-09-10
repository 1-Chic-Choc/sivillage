"use client";

import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function MainNavBarLink({
  href,
  text,
  is_current,
}: {
  href: string;
  text: string;
  is_current: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "h-12",
          "flex justify-center items-center",
          "border-b-2",
          "px-2",
          is_current ? "border-black text-black" : "border-white text-gray-400",
        )}
      >
        <span className="text-base">
          {is_current ? <strong>{text}</strong> : text}
        </span>
      </div>
    </Link>
  );
}

const paths = [
  { text: "Home", path: "/main" },
  { text: "Event", path: "/event" },
  { text: "Deal", path: "/deal" },
  { text: "Best", path: "/best" },
  { text: "S.I.LIVE", path: "/live" },
  { text: "Content", path: "/content" },
];

export default function MainNavBar() {
  const current_path = usePathname();

  return (
    <TopNavigationBar>
      <div className={cn("flex items-center pl-4 gap-1")}>
        {paths.map(({ text, path }) => (
          <MainNavBarLink
            key={text}
            href={path}
            text={text}
            is_current={current_path == path}
          />
        ))}
      </div>
    </TopNavigationBar>
  );
}
