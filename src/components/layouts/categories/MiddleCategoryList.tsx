"use client";

import {
  middleCategoryData1,
  middleCategoryData2,
  middleCategoryData3,
} from "@/datas/dummy/categoriesData";
import { quickMenuEventData } from "@/datas/dummy/quickMenuEventData";
import { quickMenuType } from "@/types/initialType";
import { middleCategoryType } from "@/types/ResponseTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MiddleCategoryList({
  categoryName,
}: {
  categoryName?: string | null;
}) {
  const data = middleCategoryData1 as middleCategoryType[];
  const data2 = middleCategoryData2 as middleCategoryType[];
  const data3 = middleCategoryData3 as middleCategoryType[];
  const image = quickMenuEventData as quickMenuType[];

  return (
    <div className="h-screen pl-4 col-span-9 border-l borer-[#e0e0e0] overflow-y-auto">
      <div className="py-4 pr-5">
        {image.map((event) => (
          <div>
            <Link href={event.link}>
              <div key={event.id}>
                <Image
                  src={event.imgUrl}
                  alt={event.name}
                  width={600}
                  height={100}
                ></Image>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <nav>
        <ul>
          {/* {data.map((category) => (
            <li key={category.middleCategoryCode}>
              {category.middleCategoryName}
            </li>
          ))} */}
          {categoryName}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
