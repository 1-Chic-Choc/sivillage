import Footer from "@/components/template/layout/Footer";
import TitleHeader from "@/components/template/layout/header/TitleHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import SearchTopNavBar from "@/components/template/layout/navbar/SearchTopNavBar";

interface LayoutProps {
  children: React.ReactNode;
  params: { keyword: string };
}

export default function RootLayout({
  children,
  params: { keyword },
}: LayoutProps) {
  keyword = decodeURI(keyword);

  // const categories = path.map((i) => decodeURI(i));
  // const filtering = { ...searchParams, categories };

  return (
    <>
      <TitleHeader />
      <SearchTopNavBar keywords={keyword} />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
