"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function Search() {
  const router = useRouter();

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    router.push(`/brandAtoZ?keyword=${e.target.value}`);
  };
  return (
    <div className="pb-4">
      <form>
        <Input
          type="text"
          placeholder="브랜드 검색"
          onChange={handleSearchKeyword}
        />
      </form>
    </div>
  );
}

export default Search;
