"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Image as sanImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

interface Product {
  name: string;
  image: Array<sanImage>;
}

interface ImageProps {
  product: Product;
}

const ImageComponent = ({ product }: ImageProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  return (
    <>
      <div className="flex flex-col  items-center gap-y-5">
        {product.image.map((image, index) => (
          <Image
            key={index}
            src={urlForImage(image).url()}
            alt={product.name}
            width={100}
            height={100}
            onMouseEnter={() => setImageIndex(index)}
          />
        ))}
      </div>
      <div className="w-full h-full rounded-md ">
        <Image
          src={urlForImage(product.image[imageIndex]).url()}
          alt={product.name}
          width={600}
          height={600}
        />
      </div>
    </>
  );
};

export default ImageComponent;
