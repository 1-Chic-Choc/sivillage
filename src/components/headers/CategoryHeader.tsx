import SearchIcon from "@/icons/Header/SearchIcon";
import React from "react";
import Header from "./Header";
import ArrowLeftIcon from "@/icons/CategoryHeader/ArrowLeftIcon";

export default function CategoryHeader() {
  return (
    <Header>
      <nav id="tabNav" className="sticky bg-slate-50 p-4">
        <ul className="grid grid-cols-12">
          <li className="col-span-2">
            <ArrowLeftIcon />
          </li>
          <ul className="flex col-span-10 border-b-2">
            <li>
              <SearchIcon />
            </li>
            <li>
              <p className="text-slate-500 pt-1">
                놓칠 수 없는 최대 30% 페이백
              </p>
            </li>
          </ul>
        </ul>
      </nav>
    </Header>
  );
}
