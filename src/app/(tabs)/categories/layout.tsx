import QuickMenu from "@/components/layouts/categories/QuickMenu";
import TabLayoutHeader from "@/components/layouts/TabLayoutHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TabLayoutHeader />
      <QuickMenu />
      {children}
    </>
  );
}

export default layout;
