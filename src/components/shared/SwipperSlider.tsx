"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import { client } from "../../../sanity/lib/client";
import { SanityProducts } from "@/interface";
import { urlForImage } from "../../../sanity/lib/image";

const getProducts = async () => {
  const query = `*[_type == "product"] | order(_createdAt asc) {
    _id,
    image,
    name,
    slug {
      current,
    },
    price,
  }`;
  const res = client.fetch(query);
  return res;
};

const SwipperSlider = async () => {
  const products: SanityProducts[] = await getProducts();
  return (
    <Swiper
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={10}
    >
      {products.map((prod, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col  justify-center px-5 py-10 items-center">
            <div className="flex flex-col  justify-center items-start h-[500px] w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={`products/${prod.slug.current}`}>
                <Image
                  src={urlForImage(prod.image[0]).url()}
                  alt={prod.name}
                  width={400}
                  height={400}
                />
                <p className="text-base font-bold text-center my-3">
                  {prod.name}
                </p>
                <p className="text-base font-bold text-center">${prod.price}</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperSlider;
