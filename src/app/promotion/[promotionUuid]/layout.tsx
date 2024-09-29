import Footer from "@/components/template/layout/Footer";
import TitleHeader from "@/components/template/layout/header/TitleHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";

interface LayoutProps {
  children: React.ReactNode;
  params: { promotionUuid: string };
}

export default function RootLayout({
  children,
  params: { promotionUuid },
}: LayoutProps) {
  return (
    <>
      <TitleHeader />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
