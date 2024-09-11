import QuickMenu from "@/components/layouts/categories/QuickMenu";
import React from "react";
import CategoryHeader from "@/components/headers/CategoryHeader";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CategoryHeader />
      <QuickMenu />
      {children}
    </>
  );
}

export default layout;
