"use client";

import { brandTabMenuData } from "@/datas/dummy/brandData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BrandNav() {
  const path = usePathname();
  return (
    <section>
      <nav>
        <ul className="grid grid-cols-2 w-full border-b-2 border-b-gray-100">
          {brandTabMenuData &&
            brandTabMenuData.map((menu) => (
              <Link href={menu.link} key={menu.id}>
                <li
                  key={menu.id}
                  className={`${path && menu.link === path ? "border-b-2 border-black" : "border-b-0"} text-center py-3`}
                >
                  {menu.name}
                </li>
              </Link>
            ))}
        </ul>
      </nav>
    </section>
  );
}

export default BrandNav;
