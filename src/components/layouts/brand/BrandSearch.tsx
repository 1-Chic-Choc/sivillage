"use client";

import SearchIcon from "@/icons/Header/SearchIcon";
import React, { useEffect, useRef, useState } from "react";

export function TextClear() {
  const [inputValue, setInputValue] = useState("");
  const [isOverflow, setIsOverflow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setInputValue("");
  };

  useEffect(() => {
    if (inputRef.current) {
      setIsOverflow(
        inputRef.current.scrollWidth > inputRef.current.clientWidth,
      );
    }
  }, [inputValue]);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        name="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mt-1 px-3 py-2 h-10 w-full focus:outline-none"
        placeholder="브랜드명 검색"
      />
      {isOverflow && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      )}
    </div>
  );
}

function BrandSearch() {
  return (
    <div className="grid grid-cols-12 px-4 py-8">
      <div className="col-span-1">
        <SearchIcon />
      </div>
      <div className="col-span-11">
        <TextClear />
      </div>
    </div>
  );
}

export default BrandSearch;
