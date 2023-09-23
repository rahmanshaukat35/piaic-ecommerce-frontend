import React from "react";
import StartShopping from "../shared/StartShopping";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="mt-10">
      <div className="flex justify-between items-center w-full gap-y-10 gap-x-20">
        {/* left side */}
        <div className="space-y-10 lg:max-w-sm w-full">
          <span className="px-8 py-2 rounded-md bg-[#e1edff] text-blue-600 font-bold">
            Sale 70%
          </span>
          <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-gray-700">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <StartShopping />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-5">
            <div>
              <Image
                src="/hero/Featured1.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured2.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured3.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured4.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="lg:block hidden">
          <div className=" bg-pink-600 rounded-full ">
            <Image
              src="/hero/header.webp"
              alt="header"
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
