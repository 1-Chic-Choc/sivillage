import React from "react";
// import { getProductData } from "@/actions/cart/cartAction";
import CartBottom from "@/components/template/layout/cart/CartBottom";
import RecommandBanner from "@/components/template/layout/cart/RecommandBanner";
import ShoppingBanner from "@/components/template/layout/cart/ShoppingBanner";
import ShoppingGuide from "@/components/template/layout/cart/ShoppingGuide";
import { options } from "@/app/api/auth/[...nextauth]/options";
import CartListContainer from "@/components/template/layout/cart/CartListContainer";
import { cartItemType } from "@/types/ResponseTypes";
import { getCartData, getProductData } from "@/action/cart/cartActions";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { error } from "console";

async function page() {
  const unsignedMember = cookies().get("X-Unsigned-User-UUID");
  console.log("####", unsignedMember?.value);

  if (unsignedMember == undefined) {
    throw new Error("X-Unsigned-User-UUID cookie is missing or undefined.");
  }

  const cartItemList = await getCartData(unsignedMember?.value);

  const selectedItem: cartItemType[] = cartItemList.filter(
    (item: cartItemType) => item.isSelected,
  );

  return (
    <main>
      <section className="py-4">
        <CartListContainer
          cartItemList={cartItemList}
          selectedItem={selectedItem}
        />
        <ShoppingGuide />
        <ShoppingBanner />
        <RecommandBanner />
        {/* <CartBottom
          totalPrice={productList.totalPrice}
          discountPrice={cartItemList.disCountTotalPrice}
          shippingPrice={cartItemList.shippingFee}
        /> */}
      </section>
    </main>
  );
}

export default page;
