"use client";

import SearchIcon from "@/icons/Header/SearchIcon";
import Search from "./Search";

function BrandSearch() {
  return (
    <div className="grid grid-cols-12 px-4 pt-4">
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
