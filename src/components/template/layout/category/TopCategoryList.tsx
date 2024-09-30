"use client";

import React, { useEffect, useState } from "react";
import MiddleCategoryList from "./MiddleCategoryList";
import { Category } from "@/types/ProductTypes";
import { getCategoryList } from "@/action/categoryAction";

function TopCategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const categoryData = await getCategoryList();
      if (categoryData) {
        const topLevelCategories = categoryData.filter(
          (category: Category) => category.depth === 0,
        );
        setCategories(topLevelCategories);

        if (topLevelCategories.length > 0) {
          setSelectedCategoryId(topLevelCategories[0].id);
          setSelectedCategoryName(topLevelCategories[0].name);
        }
      }
    };
    fetchCategoryData();
  }, []);

  const handleCategoryClick = (categoryId: number, categoryName: string) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName); // 선택된 카테고리 이름 변경
  };

  return (
    <section className="flex flex-row overflow-hidden">
      <nav className="w-[50%] overflow-clip">
        <ul>
          {categories.map((category: Category) => (
            <li
              key={category.id}
              className={`p-4 cursor-pointer whitespace-nowrap ${
                selectedCategoryId === category.id
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
              onClick={() => handleCategoryClick(category.id, category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </nav>
      {selectedCategoryId !== null && selectedCategoryName && (
        <MiddleCategoryList
          parentId={selectedCategoryId}
          parentCategoryName={selectedCategoryName} // 선택된 카테고리 이름 전달
        />
      )}
    </section>
  );
}

export default TopCategoryList;
