"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../lib/products";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";

const SwipperSlider = () => {
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
              <Link href={""}>
                <Image
                  src={prod.image}
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
