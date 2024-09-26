import React from "react";
import Link from "next/link";

import LeftArrowBracketIcon from "@/components/atom/icon/LeftArrowBracketIcon";
import HomeIcon from "@/components/atom/icon/main-nav/HomeIcon";
import Header from "../header/Header";

export default function CartHeader() {
  return (
    <Header>
      <div className="relative flex items-center w-full p-4">
        <div className="flex items-center">
          <Link href="/">
            <LeftArrowBracketIcon />
          </Link>
        </div>
        <div className="flex items-center ml-4">
          <Link href="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg">
          <span>쇼핑백</span>
        </div>
      </div>
    </Header>
  );
}
