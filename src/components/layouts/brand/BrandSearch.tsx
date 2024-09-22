"use client";

import SearchIcon from "@/icons/Header/SearchIcon";
import { brandNameType } from "@/types/initialType";
import Search from "./Search";

function BrandSearch({ data }: { data: brandNameType[] }) {
  return (
    <div className="grid grid-cols-12 px-4 py-8">
      <div className="col-span-1">
        <SearchIcon />
      </div>
      <div className="col-span-11">
        <Search />
      </div>
    </div>
  );
}

export default BrandSearch;
