import Footer from "@/components/template/layout/Footer";
import TitleHeader from "@/components/template/layout/header/TitleHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TitleHeader />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
