import React from "react";
import CategoryHeader from "@/components/headers/CategoryHeader";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";
import QuickMenu from "@/components/layouts/category/QuickMenu";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CategoryHeader />
      <QuickMenu />
      {children}
      <BottomNavigationBar />
    </>
  );
}

export default layout;
