import React from "react";
import CategoryHeader from "@/components/template/layout/header/CategoryHeader";
import QuickMenu from "@/components/template/layout/category/QuickMenu";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";

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
