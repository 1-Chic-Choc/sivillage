import { quickMenuData } from "@/datas/dummy/quickMenuData";
import { quickMenuType } from "@/types/initialType";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function QuickMenu() {
  const data = quickMenuData as quickMenuType[];

  return (
    <section className="sticky py-4 bg-slate-50">
      <nav className="overflow-scroll [&::-webkit-scrollbar]:hidden">
        <ul className="flex flex-nowrap min-w-fit gap-2 pl-4">
          {data.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="w-[64px] h-[64px] object-cover">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <p className="text-center text-xs">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default QuickMenu;
