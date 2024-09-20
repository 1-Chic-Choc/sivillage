import SearchIcon from "@/icons/Header/SearchIcon";
import ShoppingBagIcon from "@/icons/Header/ShoppingBagIcon";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  return (
    <Header>
      <div className={cn("h-14", "flex justify-between items-center", "pr-4")}>
        <Link href="/">
          <Image src="/logo.gif" width={184} height={56} alt="로고 이미지" />
        </Link>
        <div className="w-20 h-8 flex justify-between items-center">
          <Link href="/search">
            <SearchIcon />
          </Link>

          <Link href="/cart">
            <ShoppingBagIcon />
          </Link>
        </div>
      </div>
    </Header>
  );
}
