import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";
import SearchIcon from "@/components/atom/icon/SearchIcon";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";

export default function MainHeader() {
  return (
    <Header>
      <div className={cn("h-14", "flex justify-between items-center", "pr-4")}>
        <Link href="/">
          <Image
            src="/logo.webp"
            width={184}
            height={56}
            alt="로고 이미지"
            unoptimized
          />
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
