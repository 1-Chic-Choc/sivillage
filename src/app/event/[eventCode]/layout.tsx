import Footer from "@/components/template/layout/Footer";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";

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
