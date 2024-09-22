"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { quickMenuEventData } from "@/datas/dummy/quickMenuEventData";
import { categoryData } from "@/datas/dummy/categoriesData";

function MiddleCategoryList({
  categoryName,
}: {
  categoryName?: string | null;
}) {
  const selectedCategory = categoryData.find(
    (cat) => cat.ctg_name === categoryName,
  );
  const filteredImages = quickMenuEventData.filter(
    (event) => event.ctg_no === selectedCategory?.ctg_no,
  );
  const subCategories = categoryData.filter(
    (cat) => cat.parent_ctg_no === selectedCategory?.ctg_no,
  );

  const formatCategoryName = (name: any) => name.replace(/\//g, "-");

  return (
    <div className="h-screen pl-4 col-span-9 border-l border-[#e0e0e0] overflow-y-auto">
      <div className="py-4 pr-5">
        {filteredImages.map((event) => (
          <div key={event.id}>
            <Link href={event.link}>
              <Image
                src={event.imgUrl}
                alt={event.name}
                width={600}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div>
      <nav className="p-4">
        <ul className="list-none">
          {subCategories.map((category) => (
            <li key={category.ctg_no} className="py-2">
              <Link
                href={`/categories/${category.ctg_name}`}
                className="text-gray-700 hover:text-black"
              >
                {category.ctg_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
