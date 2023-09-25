import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <Link href={"/sweater"}>Sweater</Link>
      <Link href={"/dress"}>Dress</Link>
      <Link href={"/pants"}>Pants</Link>
      <Link href={"/jackets"}>Jackets</Link>
      <Link href={"/tshirt"}>T-Shirt</Link>
      <Link href={"/products"}>All Products</Link>
    </div>
  );
};

export default Menu;
