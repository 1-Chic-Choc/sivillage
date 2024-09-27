import React from "react";
import Header from "./Header";
import LeftArrowBracketIcon from "@/components/atom/icon/LeftArrowBracketIcon";
import SearchIcon from "@/components/atom/icon/SearchIcon";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";
import SearchButton from "@/components/molecule/button/SeachButton";

export default function BrandHeader() {
  return (
    <Header>
      <nav className="p-4">
        <ul className="flex justify-between">
          <li>
            <LeftArrowBracketIcon />
          </li>
          <li className="absolute left-[50%] translate-x-[-50%] text-2xl">
            Brand
          </li>
          <ul className="flex gap-4">
            <li>
              <SearchButton />
            </li>
            <li>
              <ShoppingBagIcon />
            </li>
          </ul>
        </ul>
      </nav>
    </Header>
  );
}
