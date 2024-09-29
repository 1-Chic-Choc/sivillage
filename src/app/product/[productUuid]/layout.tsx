import Footer from "@/components/template/layout/Footer";
import ProductDetailHeader from "@/components/template/layout/header/ProductDetailHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProductDetailHeader />
      {children}
      <Footer />
    </>
  );
}
