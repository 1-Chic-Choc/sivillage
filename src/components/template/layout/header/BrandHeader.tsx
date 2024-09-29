import React from "react";
import Header from "./Header";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";
import SearchButton from "@/components/molecule/button/SeachButton";
import HistoryBackButton from "@/components/molecule/button/HistoryBackButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BrandHeader() {
  return (
    <Header>
      <nav className="p-4">
        <ul className="flex justify-between">
          <li>
            <HistoryBackButton
              variant="ghost"
              className={cn("absolute left-[16px]", "w-[32px] h-[32px] p-0")}
            />
          </li>
          <li className="absolute left-[50%] translate-x-[-50%] text-2xl">
            Brand
          </li>
          <ul className="flex gap-4">
            <li>
              <SearchButton />
            </li>
            <li>
              <Link href="/cart">
                <ShoppingBagIcon />
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </Header>
  );
}
