"use client";

import { topcategoryData } from "@/datas/dummy/categoriesData";
import { topCategoryType } from "@/types/ResponseTypes";
import React, { useState } from "react";
import MiddleCategoryList from "./MiddleCategoryList";

function TopCategoryList() {
  const data = topcategoryData as topCategoryType[];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    console.log(categoryName);

    setSelectedCategory(categoryName);
  };

  return (
    <section className="flex flex-row h-screen">
      <nav className="w-[50%] overflow-clip">
        <ul>
          {data.map((category: topCategoryType) => (
            <li
              key={category.topCategoryCode}
              className={`p-4 cursor-pointer ${
                selectedCategory === category.topCategoryName
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
              onClick={() => handleCategoryClick(category.topCategoryName)}
            >
              {category.topCategoryName}
            </li>
          ))}
        </ul>
      </nav>
      <MiddleCategoryList categoryName={selectedCategory} />
    </section>
  );
}

export default TopCategoryList;
