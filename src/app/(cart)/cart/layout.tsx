import CartHeader from "@/components/template/layout/cart/CartHeader";
import Footer from "@/components/template/layout/Footer";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartHeader />
      {children}
      <Footer />
    </>
  );
}

export default layout;
