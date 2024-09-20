import BrandHeader from "@/components/headers/BrandHeader";
import BrandTabNavBar from "@/components/navbars/BrandTabNavBar";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandHeader />
      <BrandTabNavBar />
      {children}
    </>
  );
}

export default layout;
