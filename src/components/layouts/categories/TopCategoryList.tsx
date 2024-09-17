"use client";

import { categoryData } from "@/datas/dummy/categoriesData";
import { CategoryType } from "@/types/ResponseTypes";
import React, { useState } from "react";
import MiddleCategoryList from "./MiddleCategoryList";

function TopCategoryList() {
  const data = categoryData as CategoryType[];
  const [selectedCategory, setSelectedCategory] = useState<string>("여성의류");
  const topLevelCategories = data.filter((category) => category.depth === 0);

  const handleCategoryClick = (categoryName: string) => {
    console.log(categoryName);
    setSelectedCategory(categoryName);
  };

  return (
    <section className="flex flex-row h-screen">
      <nav className="w-[50%] overflow-clip">
        <ul>
          {topLevelCategories.map((category: CategoryType) => (
            <li
              key={category.ctg_no}
              className={`p-4 cursor-pointer whitespace-nowrap ${
                selectedCategory === category.ctg_name
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
              onClick={() => handleCategoryClick(category.ctg_name)}
            >
              {category.ctg_name}
            </li>
          ))}
        </ul>
      </nav>
      <MiddleCategoryList categoryName={selectedCategory} />
    </section>
  );
}

export default TopCategoryList;
