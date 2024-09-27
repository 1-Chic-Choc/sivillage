"use client";

import React from "react";
import CartbottomTab from "./CartbottomTab";
import { MinusIcon, PlusIcon } from "lucide-react";

function CartBottom({
  totalPrice,
  discountPrice,
  shippingPrice,
}: {
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
}) {
  const [isView, setIsView] = React.useState(false);

  return (
    <>
      <div
        className={`${isView && "modal-backdrop"}`}
        onClick={() => setIsView(false)}
      ></div>
      <section
        className={`
          fixed bottom-0 left-0 w-full bg-white px-5 pt-[2rem] pb-[80px]
          transition-all ease-in-out duration-300
          z-[999]
          ${isView ? "translate-y-0" : "translate-y-full"}`}
      >
        <ul className="grid grid-cols-12 px-1 items-center text-xs">
          <li className="col-span-4 text-center flex flex-col justify-center items-center">
            총 상품금액
            <br />
            {totalPrice.toLocaleString()}원
          </li>
          <li className=" col-span-1 flex justify-center">
            <PlusIcon size={9} strokeWidth={1.5} />
          </li>
          <li className=" col-span-2 text-center flex flex-col justify-center items-center">
            배송비
            <br />
            {shippingPrice.toLocaleString()}원
          </li>
          <li className=" col-span-1 flex justify-center">
            <MinusIcon size={9} strokeWidth={1.5} />
          </li>
          <li className=" col-span-4 text-center flex flex-col justify-center items-center">
            할인금액
            <br />
            {discountPrice.toLocaleString()}원
          </li>
        </ul>
      </section>
      <CartbottomTab
        totalPrice={totalPrice}
        discountPrice={discountPrice}
        shippingPrice={shippingPrice}
        setIsView={setIsView}
      />
    </>
  );
}

export default CartBottom;
