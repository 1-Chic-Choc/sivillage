import React from "react";
import AuthServiceHeader from "@/components/layouts/AuthServiceHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthServiceHeader />
      {children}
    </>
  );
}
