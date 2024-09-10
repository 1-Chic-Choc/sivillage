import BrandAtoZ from "@/icons/BottomNavigation/BrandAtoZ";
import CategoryIcon from "@/icons/BottomNavigation/CategoryIcon";
import EmptyCartIcon from "@/icons/BottomNavigation/EmptyCartIcon";
import HomeIcon from "@/icons/BottomNavigation/HomeIcon";
import MyPageIcon from "@/icons/BottomNavigation/MyPageIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function BottomNavigationBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn("flex flex-col", "items-center")}>
      {children}
    </Link>
  );
}

const paths = [
  { text: "Category", path: "/category", icon: <CategoryIcon /> },
  { text: "Brand", path: "/brandAtoZ", icon: <BrandAtoZ /> },
  { text: null, path: "/main", icon: <HomeIcon /> },
  { text: "My", path: "/my", icon: <MyPageIcon /> },
  { text: "Recent", path: "/recent", icon: <EmptyCartIcon /> },
];

export default function BottomNavigationBar() {
  return (
    <nav className={cn("fixed", "bottom-0", "bg-white", "w-full")}>
      <div
        className={cn("h-14", "flex justify-around items-center", "text-xs")}
      >
        {paths.map(({ text, path, icon }) => (
          <BottomNavigationBarLink key={text} href={path}>
            {icon}
            <div>{text}</div>
          </BottomNavigationBarLink>
        ))}
      </div>
    </nav>
  );
}
