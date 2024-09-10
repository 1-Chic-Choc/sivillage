"use client";

import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import SearchIcon from "../../icons/SearchIcon";
import ShoppingIcon from "../../icons/ShoppingIcon";
import TitleHeader from "../../ui/TitleHeader";
import { usePathname } from "next/navigation";

export default function AuthServiceHeader() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (pathName === "/brand") {
      setTitle("BRAND");
    } else {
      setTitle("BRAND");
    }
  }, [pathName]);

  return (
    <header className="flex flex-col justify-center w-full px-[16px] h-[56px]">
      <nav>
        <ul className="flex justify-between">
          <li>
            <ArrowLeftIcon></ArrowLeftIcon>
          </li>
          <li className="absolute left-[50%] translate-x-[-50%]">
            <TitleHeader title={title} textStyle="text-xl"></TitleHeader>
          </li>
          <ul className="flex gap-4">
            <li>
              <SearchIcon></SearchIcon>
            </li>
            <li>
              <ShoppingIcon></ShoppingIcon>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
