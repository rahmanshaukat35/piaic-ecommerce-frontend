"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../shared/Menu";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const totalItems = 0;

  const handleNav = () => setNav(!nav);
  return (
    <nav>
      {/* large Screen */}
      <div className="flex justify-between items-center w-full h-20 lg:px-20 px-5 max-w-[1640px] mx-auto">
        {/* Logo Image */}
        <div>
          <Link href={"/"}>
            <Image src="/Logo.webp" alt="" width={150} height={150} />
          </Link>
        </div>
        {/* Menu Bar */}
        <div className="hidden lg:block">
          <Menu />
        </div>
        {/* Search Bar */}
        <div className="border border-gray-300 rounded-md px-2 py-1 bg-white hidden lg:flex items-center w-[30%]">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            placeholder="What you looking for"
            className="outline-none ml-1"
          />
        </div>
        {/* Cart Icon & login button */}
        <div className="hidden lg:flex items-center justify-between gap-2">
          {/* UserButton */}
          {/* Cart Icon */}
          <Link href={"/cart"} onClick={handleNav}>
            <div className="w-10 h-10 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute left-7 bottom-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                {totalItems}
              </span>
            </div>
          </Link>
        </div>
        {/* Menu Burger */}
        <div className="flex justify-center items-center lg:hidden">
          <AiOutlineMenu onClick={handleNav} size={30} />
        </div>
      </div>
      {/* Mobile Screen */}
      <div
        className={`${
          nav
            ? "flex lg:hidden flex-col w-full h-screen items-center fixed top-0 left-0 z-[100] px-5 bg-white"
            : "flex lg:hidden flex-col w-full h-screen items-center fixed top-[-100%] left-0 z-[100] bg-white px-5"
        }`}
      >
        <div className="flex justify-between items-center w-full h-20">
          {/* Logo Image */}
          <div>
            <Link href={"/"}>
              <Image src="/Logo.webp" alt="" width={150} height={150} />
            </Link>
          </div>
          {/* Close Icon */}
          <div>
            <TiDeleteOutline onClick={handleNav} size={30} />
          </div>
        </div>
        {/* menu burger open */}
        <div className="mt-28 flex flex-col items-center justify-center gap-5">
          {/* Cart Icon */}
          <Link href={"/cart"} onClick={handleNav}>
            <div className="w-12 h-12 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute bottom-8 left-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                {totalItems}
              </span>
            </div>
          </Link>
          {/* Menu Bar */}
          <span onClick={handleNav}>
            <Menu />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
