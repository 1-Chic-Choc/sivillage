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
    <Link
      href={href}
      className={cn(
        "h-[48px] mx-[9px] border-b-[2px]",
        "inline-flex flex-shrink-0 flex-wrap items-center",
        "overflow-hidden",
        text === "Home" && "px-[1px]",
        is_current ? "border-[#131922]" : "border-white",
      )}
      target={text === "SSG DF" ? "_blank" : ""}
      rel={text === "SSG DF" ? "noopener noreferrer" : ""}
    >
      <span
        className={cn(
          "text-[16px] font-[500] leading-[24px] tracking-[0.4px] text-nowrap",
          is_current ? "text-[#131922]" : "text-[#929292]",
        )}
      >
        {is_current ? <strong>{text}</strong> : text}
      </span>
    </Link>
  );
}

const paths = [
  { text: "Home", path: "/" },
  { text: "Event", path: "/event" },
  { text: "Deal", path: "/deal" },
  { text: "Best", path: "/best" },
  { text: "S.I.LIVE", path: "/live" },
  { text: "Content", path: "/content" },
  { text: "SSG DF", path: "https://www.ssgdfs.com/kr/main/initMain" },
];

export default function MainNavBar() {
  const current_path = usePathname();

  return (
    <TopNavigationBar
      className={cn(
        "flex flex-nowrap items-center px-[15px] leading-[normal] overflow-x-auto scrollbar-hide z-50",
      )}
    >
      {paths.map(({ text, path }) => (
        <MainNavBarLink
          key={text}
          href={path}
          text={text}
          is_current={current_path == path}
        />
      ))}
    </TopNavigationBar>
  );
}
