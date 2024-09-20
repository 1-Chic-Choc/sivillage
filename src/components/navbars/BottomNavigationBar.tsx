import BrandAtoZ from "@/icons/BottomNavigation/BrandAtoZ";
import CategoryIcon from "@/icons/BottomNavigation/CategoryIcon";
import EmptyCartIcon from "@/icons/BottomNavigation/EmptyCartIcon";
import HomeIcon from "@/icons/BottomNavigation/HomeIcon";
import MyPageIcon from "@/icons/BottomNavigation/MyPageIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const paths = [
  { text: "Category", path: "/category", icon: <CategoryIcon /> },
  { text: "BRAND", path: "/brandAtoZ", icon: <BrandAtoZ /> },
  { text: null, path: "/", icon: <HomeIcon /> },
  { text: "MY", path: "/my", icon: <MyPageIcon /> },
  { text: "Recent", path: "/recent", icon: <EmptyCartIcon /> },
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
