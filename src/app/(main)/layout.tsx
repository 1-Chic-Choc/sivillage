import Footer from "@/components/template/layout/Footer";
import MainHeader from "@/components/template/layout/header/MainHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import MainNavBar from "@/components/template/layout/navbar/MainTopNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <MainNavBar />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
