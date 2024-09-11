import BrandHeader from "@/components/headers/BrandHeader";
import BrandTabNav from "@/components/layouts/brand/BrandTabNav";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandHeader />
      <BrandTabNav />
      {children}
    </>
  );
}

export default layout;
