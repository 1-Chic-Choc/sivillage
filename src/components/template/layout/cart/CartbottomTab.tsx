"use client";

import { TextUi } from "@/components/ui/TextUi";
import { GiftIcon } from "lucide-react";
import React from "react";

const cartBottomMenu = [
  {
    id: 1,
    title: "선물하기",
    cols: "col-span-4",
    bg: null,
    icon: <GiftIcon strokeWidth={0.8} />,
  },
  {
    id: 2,
    title: "주문하기",
    titlecolor: "text-white",
    cols: "col-span-8",
    bg: "bg-black",
    icon: null,
  },
];

function CartbottomTab({
  totalPrice,
  discountPrice,
  shippingPrice,
  setIsView,
}: {
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  setIsView: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="fixed bottom-0 left-0 z-[999] border-t-[1px] border-[#33333350] bg-white w-full">
      <ul className="grid grid-cols-12 w-full">
        {cartBottomMenu.map((menu) => (
          <li
            key={menu.id}
            className={`
              ${menu.cols} 
              px-2 flex justify-center items-center h-[52px] border-r-[1px] border-[#33333350] last:border-r-0
              ${menu.bg}
              ${menu.titlecolor}
            `}
            {...(menu.id === 2 && { onClick: () => setIsView(true) })}
          >
            {menu.icon ? (
              menu.icon
            ) : (
              <TextUi size={"md"} variant={menu.bg ? "white" : "default"}>
                {totalPrice + shippingPrice - discountPrice} {menu.title}
              </TextUi>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartbottomTab;
