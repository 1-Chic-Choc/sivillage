import Footer from "@/components/footer/Footer";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}