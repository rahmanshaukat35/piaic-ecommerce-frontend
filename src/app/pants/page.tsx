import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { SanityProducts } from "../../interface";
import { urlForImage } from "../../../sanity/lib/image";

const getAllProducts = async () => {
  const query = `*[_type== "product" && subcat == "Pants" ] | order(_createdAt asc){
    _id,
    name,
    subcat,
    image,
    price,
    slug,
    category
  }`;
  const res = await client.fetch(query);
  return res;
};

const Pants = async () => {
  const productsData: SanityProducts[] = await getAllProducts();

  return (
    <main className="lg:px-20 px-5 max-w-[1540px] mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 place-items-center px-10">
        {productsData.map((product) => (
          <div
            key={product._id}
            className="flex flex-col rounded-md justify-center items-center mt-3 gap-2 hover:scale-110 ease-in duration-300"
          >
            <Link href={`/products/${product.slug.current}`}>
              <Image
                src={urlForImage(product.image[0]).url()}
                alt={product.name}
                width={300}
                height={300}
              />
              <h4 className="self-start mt-3">{product.name}</h4>
              <p className="self-start mt-1">{product.subcat}</p>
              <h4 className="self-start mt-3">${product.price}</h4>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pants;
