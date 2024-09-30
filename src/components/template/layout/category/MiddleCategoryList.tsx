"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Category } from "@/types/ProductTypes";
import { getCategoryList } from "@/action/categoryAction";

interface MiddleCategoryListProps {
  parentId: number;
  parentCategoryName: string;
}

function MiddleCategoryList({
  parentId,
  parentCategoryName,
}: MiddleCategoryListProps) {
  const [middleCategoryList, setMiddleCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    const fetchMiddleCategories = async () => {
      const categoryData = await getCategoryList({ parentId });
      if (categoryData) {
        setMiddleCategoryList(categoryData);
      }
    };

    fetchMiddleCategories();
  }, [parentId]);

  const formatCategoryName = (name: any) => name.replace(/\//g, "_");

  return (
    <div className="h-screen pl-4 col-span-9 border-l border-[#e0e0e0] overflow-y-auto">
      <nav className="p-4">
        <ul className="list-none">
          {middleCategoryList.map((category: Category) => (
            <li key={category.id} className="py-2">
              <Link
                href={`/category/${formatCategoryName(parentCategoryName)}/${formatCategoryName(category.name)}`}
                className="text-gray-700 hover:text-black"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
