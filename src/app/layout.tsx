import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Aos from "@/components/aos/Aos";
import { getServerSession } from "next-auth";
import AuthContextProvider from "@/provider/AuthContextProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

const regularBoldCello = localFont({
  src: "RegularBoldCello-Heavy.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-regular-bold-cello",
});

export const metadata: Metadata = {
  title: "SIVILLAGE",
  description: "The Real Luxury, SIVILLAGE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const isAuth = session?.user ? true : false;

  return (
    <html lang="ko">
      <body
        className={cn(
          roboto.variable,
          regularBoldCello.variable,
          roboto.className,
        )}
      >
        <AuthContextProvider isAuth={isAuth}>{children}</AuthContextProvider>
        <Aos />
      </body>
    </html>
  );
}
