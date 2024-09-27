import React from "react";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";
import HistoryBackButton from "@/components/molecule/button/HistoryBackButton";
import SearchIcon from "@/components/atom/icon/SearchIcon";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";
import SearchButton from "@/components/molecule/button/SeachButton";

export default function BrandProductHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Header>
      <div className={cn("h-[56px]", "flex justify-center items-center")}>
        <HistoryBackButton
          variant="ghost"
          className={cn("absolute left-[16px]", "w-[32px] h-[32px] p-0")}
        />

        <Link
          href={"./sign-in"}
          className={cn(
            "w-[calc(100%-190px)] h-[26px]",
            "font-[500] text-[18px] text-center",
            "leading-[normal]",
          )}
        >
          {children}
        </Link>

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
