import SearchIcon from "@/icons/MainHeader/SearchIcon";
import ShoppingBagIcon from "@/icons/MainHeader/ShoppingBagIcon";
import React from "react";
import Header from "./Header";
import ArrowLeftIcon from "@/icons/BrandCategory/ArrowLeftIcon";

export default function MainHeader() {
  return (
    <Header>
      <nav className="p-4">
        <ul className="flex justify-between">
          <li>
            <ArrowLeftIcon />
          </li>
          <li className="absolute left-[50%] translate-x-[-50%] text-2xl">
            Brand
          </li>
          <ul className="flex gap-4">
            <li>
              <SearchIcon />
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
