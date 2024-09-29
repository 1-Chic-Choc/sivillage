import Footer from "@/components/template/layout/Footer";
import MainHeader from "@/components/template/layout/header/MainHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import CategoryTopNavBar from "@/components/template/layout/navbar/CategoryTopNavBar";

interface LayoutProps {
  children: React.ReactNode;
  params: { path: string[] };
}

export default function RootLayout({
  children,
  params: { path },
}: LayoutProps) {
  const categories = path.map((i) => decodeURI(i));

  return (
    <>
      <MainHeader />
      <CategoryTopNavBar {...{ categories }} />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
