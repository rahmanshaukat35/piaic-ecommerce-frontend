import Image from "next/image";
import React from "react";

const Unique = () => {
  return (
    <main className="mt-15">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 col-start-1 h-full w-full  xl:col-start-2">
          <h3 className="text-[2.5rem] sm:text-[2.75rem] tracking-[0.03em] leading-[3rem]">
            Unique and Authentic Vintage Designer Jewellery
          </h3>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5">
          {/* left side */}
          <div className="relative col-span-2 h-full w-full  xl:col-span-1">
            <div className="grid grid-cols-2 gap-10 mr-20">
              <div className="max-w-[13rem] space-y-2">
                <h6 className="font-semibold text-xl">
                  Using Good Quality Materials
                </h6>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="max-w-[13rem] space-y-2">
                <h6 className="font-semibold text-xl">
                  Using Good Quality Materials
                </h6>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="max-w-[13rem] space-y-2">
                <h6 className="font-semibold text-xl">
                  Using Good Quality Materials
                </h6>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="max-w-[13rem] space-y-2">
                <h6 className="font-semibold text-xl">
                  Using Good Quality Materials
                </h6>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-2   xl:col-span-1">
            <div className="flex flex-col h-full w-full items-center justify-center gap-5 sm:flex-row">
              <div className="basis-1/2  w-full flex justify-center">
                <Image
                  src="/products/feature.webp"
                  alt=""
                  width={250}
                  height={250}
                  className=""
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5  basis-1/2 ">
                <p className="tracking-wider leading-6">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="w-28 bg-black p-2 text-sm text-white">
                  See All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Unique;
