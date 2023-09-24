import React from "react";
import produtcs from "../../lib/products";
import Link from "next/link";
import Image from "next/image";
const AllProducts = () => {
  const productsData = produtcs;
  return (
    <main className="lg:px-20 px-5 max-w-[1540px] mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 place-items-center px-10">
        {productsData.map((product) => (
          <div
            key={product._id}
            className="flex flex-col rounded-md justify-center items-center mt-3 gap-2 hover:scale-110 ease-in duration-300"
          >
            <Link href={`products/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
              <h4 className="self-start mt-3">{product.name}</h4>
              {/* <p className="self-start mt-1">{product.subcat}</p> */}
              <h4 className="self-start mt-3">${product.price}</h4>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
