import BrandHeader from "@/components/headers/BrandHeader";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";
import BrandTabNavBar from "@/components/navbars/BrandTabNavBar";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrandHeader />
      <BrandTabNavBar />
      {children}
      <BottomNavigationBar />
    </>
  );
}

export default layout;
