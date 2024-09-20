import QuickMenu from "@/components/layouts/categories/QuickMenu";
import React from "react";
import CategoryHeader from "@/components/headers/CategoryHeader";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";

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
