import Hero from "@/components/sections/Hero";
import Newsletter from "@/components/sections/Newsletter";
import Products from "@/components/sections/Products";
import Promotions from "@/components/sections/Promotions";
import Unique from "@/components/sections/Unique";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
      <Unique />
      <Newsletter />
    </main>
  );
}
