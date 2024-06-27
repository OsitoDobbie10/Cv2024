import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio CAAM",
  description: "Hecho por Carlos Archaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Navbar/>
      <Header/>
      {children}
      </body>
    </html>
  );
}
