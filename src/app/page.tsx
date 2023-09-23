import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Promotions from "@/components/sections/Promotions";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
    </main>
  );
}
