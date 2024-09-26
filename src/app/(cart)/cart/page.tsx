import React from "react";
// import { getProductData } from "@/actions/cart/cartAction";
import CartBottom from "@/components/template/layout/cart/CartBottom";
import RecommandBanner from "@/components/template/layout/cart/RecommandBanner";
import ShoppingBanner from "@/components/template/layout/cart/ShoppingBanner";
import ShoppingGuide from "@/components/template/layout/cart/ShoppingGuide";
import {
  fetchCartItemList,
  getCartData,
  getProductData,
} from "@/action/cart/myDataAction";
import CartListContainer from "@/components/template/layout/cart/CartListContainer";
import { cartItemType } from "@/types/ResponseTypes";

async function page() {
  const cartItemList = await getCartData();
  console.log(cartItemList);

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
