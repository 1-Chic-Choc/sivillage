"use client";

import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function BrandNavBarLink({
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
  { text: "A-Z", path: "/brandAtoZ" },
  { text: "My Favorite", path: "/brandAtoZ/myfav" },
];

export default function BrandTabNavBar() {
  const current_path = usePathname();

  return (
    <TopNavigationBar>
      <div className={cn("grid grid-cols-2 pl-4 gap-1")}>
        {paths.map(({ text, path }) => (
          <BrandNavBarLink
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
