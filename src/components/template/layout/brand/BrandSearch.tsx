"use client";

import SearchIcon from "@/components/atom/icon/SearchIcon";
import { brandNameType } from "@/types/initialType";
import Search from "./Search";

function BrandSearch() {
  return (
    <div className="grid grid-cols-12 px-4 pt-6">
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
