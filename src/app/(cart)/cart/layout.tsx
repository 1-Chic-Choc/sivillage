import CartHeader from "@/components/template/layout/cart/CartHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartHeader />
      {children}
    </>
  );
}

export default layout;
