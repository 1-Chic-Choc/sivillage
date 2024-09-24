import HomeIcon from "@/components/atom/icon/main-nav/HomeIcon";
import MyPageIcon from "@/components/atom/icon/main-nav/MyPageIcon";
import CategoryIcon from "@/components/atom/icon/main-nav/CategoryIcon";
import BrandAtoZIcon from "@/components/atom/icon/main-nav/BrandAtoZIcon";
import RecentIcon from "@/components/atom/icon/main-nav/RecentIcon";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const paths = [
  { text: "Category", path: "/category", icon: <CategoryIcon /> },
  { text: "BRAND", path: "/brandAtoZ", icon: <BrandAtoZIcon /> },
  { text: null, path: "/", icon: <HomeIcon /> },
  { text: "MY", path: "/mypage", icon: <MyPageIcon /> },
  { text: "Recent", path: "/recent", icon: <RecentIcon /> },
];

export default function BottomNavigationBar() {
  return (
    <div className={cn("border-b", "fixed bottom-0", "w-full h-[56px] z-50")}>
      <nav
        className={cn(
          "w-full h-[56px]",
          "flex justify-around items-end",
          "bg-white",
          "text-[10px] text-[rgb(146,146,146)] font-[400]",
        )}
      >
        {paths.map(({ text, path, icon }) => (
          <div
            key={path}
            className={cn(
              "w-full h-full border-t-[1px] border-[#e0e0e0]",
              "flex justify-center items-center",
            )}
          >
            <Link
              href={path}
              className={cn("flex justify-center items-end", "py-[6px]")}
            >
              <span
                className={cn(
                  "flex flex-col justify-center items-center",
                  "leading-[12px]",
                  text && "gap-[2px]",
                )}
              >
                {icon}
                <span className={""}>{text}</span>
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
