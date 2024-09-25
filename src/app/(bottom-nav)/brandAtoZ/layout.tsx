import Footer from "@/components/template/layout/Footer";
import BrandHeader from "@/components/template/layout/header/BrandHeader";
import BrandTabNavBar from "@/components/template/layout/navbar/BrandTabNavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandHeader />
      <BrandTabNavBar />
      {children}
      <Footer />
    </>
  );
}

export default layout;
