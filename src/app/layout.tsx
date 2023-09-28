import Navbar from "@/components/sections/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Providers from "@/components/utils/Providers";

const sora = Sora({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Dine Market",
  description: "Ecommerce shopping App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={sora.className}>
          <main className="lg:px-20 px-5 max-w-[1540px] mx-auto min-h-screen">
            <Navbar />
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
