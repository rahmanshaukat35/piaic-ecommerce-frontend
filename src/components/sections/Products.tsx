import React from "react";
import SwipperSlider from "../shared/SwipperSlider";

const Products = () => {
  return (
    <main className="mt-15">
      <div className="flex flex-col justify-center items-center px-5 py-20 space-y-5">
        <p className="text-blue-800 text-sm">PRODUCTS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Check What We Have</h3>
        <div className="w-full mx-auto">
          <SwipperSlider />
        </div>
      </div>
    </main>
  );
};

export default Products;
