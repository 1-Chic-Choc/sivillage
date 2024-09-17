import SearchIcon from "@/icons/Header/SearchIcon";
import ShoppingBagIcon from "@/icons/Header/ShoppingBagIcon";
import React from "react";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";
import PathText from "./PathText";
import BackNavigationButton from "@/components/buttons/BackNavigationButton";

export default function AuthHeader() {
  return (
    <Header>
      <div className={cn("h-[56px]", "flex justify-center items-center")}>
        <BackNavigationButton
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
          <PathText />
        </Link>

        <div
          className={cn(
            "absolute right-[16px]",
            "flex justify-between items-center",
            "absolute w-20 h-8",
          )}
        >
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
