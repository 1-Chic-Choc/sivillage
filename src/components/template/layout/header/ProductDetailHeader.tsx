import React from "react";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";
import HistoryBackButton from "@/components/molecule/button/HistoryBackButton";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";
import SearchButton from "@/components/molecule/button/SeachButton";
import ProductDetailHomeIcon from "@/components/atom/icon/main-nav/ProductDetailHomeIcon";

export default function ProductDetailHeader() {
  return (
    <Header>
      <div className={cn("h-[56px]", "flex justify-center items-center")}>
        <div
          className={cn(
            "absolute left-[16px]",
            "flex justify-between items-center",
            "absolute w-20 h-8",
          )}
        >
          <HistoryBackButton
            variant="ghost"
            className={cn("w-[32px] h-[32px] p-0")}
          />
          <Link href="/">
            <ProductDetailHomeIcon />
          </Link>
        </div>

        <div
          className={cn(
            "absolute right-[16px]",
            "flex justify-between items-center",
            "absolute w-20 h-8",
          )}
        >
          <SearchButton />
          <Link href="/cart">
            <ShoppingBagIcon />
          </Link>
        </div>
      </div>
    </Header>
  );
}
