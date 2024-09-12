import CartList from "@/components/cart/CartList";
import RecommandBanner from "@/components/cart/RecommandBanner";
import ShoppingBanner from "@/components/cart/ShoppingBanner";
import ShoppingGuide from "@/components/cart/ShoppingGuide";
import React from "react";

function page() {
  return (
    <main>
      <section className="py-4">
        <CartList />
        <ShoppingBanner />
        <ShoppingGuide />
        <RecommandBanner />
      </section>
    </main>
  );
}

export default page;
