import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-[#666666] mt-20">
      <main className="container px-10 mx-auto">
        <div className=" flex flex-col w-full lg:flex-row justify-between lg:items-start mb-10">
          <div className="w-2/6 flex flex-col gap-12 lg:mt-6 ">
            <Image src="/Logo.webp" alt="logo" width={200} height={200} />
            <p>
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex items-start gap-x-5">
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <a href="">
                  {" "}
                  <FaTwitter fill="black" color="black" />
                </a>
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <a href="">
                  <FaFacebook fill="black" color="black" />
                </a>
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <a href="">
                  <FaLinkedinIn fill="black" color="black" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-[20%] flex flex-col gap-3">
            <h3>Company</h3>
            <Link href={""}>About</Link>
            <Link href={""}>Terms of Use</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>How it Works</Link>
            <Link href={""}>Contact Us</Link>
          </div>

          <div className="w-[20%] flex flex-col gap-3">
            <h3>Support</h3>
            <Link href={""}>Support Carrer</Link>
            <Link href={""}>24h Services</Link>
            <Link href={""}>Quick Chat</Link>
          </div>

          <div className="w-[20%] flex flex-col gap-3">
            <h3>Contact</h3>
            <Link href={""}>Whatsapp</Link>
            <Link href={""}>Support 24h</Link>
          </div>
        </div>
      </main>

      <div className="border-t border-black bg-gray-200 w-full">
        <div className=" max-w-[1240px] w-full mx-auto lg:px-20 py-5 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
            <div className="">Copyright &copy; {year} Dine Market </div>
            <div className="">
              Design by:{" "}
              <Link
                href={"https://www.mkdev.live/"}
                className="font-bold text-black"
              >
                Rahman Shaukat Butt
              </Link>
            </div>
            <div className="">
              Code by:{" "}
              <Link
                href={"https://github.com/mkdeveloper"}
                className="font-bold text-black"
              >
                rahmanshaukat on Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;