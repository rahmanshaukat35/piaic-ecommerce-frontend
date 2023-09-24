import Navbar from "@/components/sections/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/sections/Footer";

const sora = Sora({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="lg:px-20 px-5 max-w-[1540px] mx-auto">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
