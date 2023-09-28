"use client";
import CartItemCard from "@/components/shared/CartItemCard";
import { selectIsLoading } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import React from "react";

const CartDataLoadingFromApi = () => {
  return (
    <main className="lg:px-20 px-5 max-w-[1540px] mx-auto mt-16">
      <div className="flex justify-center items-center w-full h-40">
        <h1>Loading Data .........</h1>
      </div>
    </main>
  );
};

const LoadedCartData = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalAmount);

  if (cartItems.length > 0) {
    return (
      <main className="lg:px-20 px-5 max-w-[1540px] mx-auto mt-36 space-y-28">
        <h3 className="text-4xl font-bold flex justify-center items-center">
          Shopping Cart
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-x-5 px-5">
          <div className="basis-3/4">
            {cartItems.map((elm) => (
              <CartItemCard key={elm._id} cartItem={elm} />
            ))}
          </div>
          <div className="basis-1/4 bg-gray-200 rounded-md w-full h-full  mt-5 sm:mt-0 p-2 self-start">
            <div className="flex flex-col items-center justify-between gap-5">
              <h4>Order Summary</h4>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p>Quantity</p>
                </div>
                <div>
                  <p>{totalItems}</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p>Total Amount</p>
                </div>
                <div>
                  <p>${totalPrice}</p>
                </div>
              </div>
              <div>{/* <StripeCheckOutButton products={cartItems} /> */}</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

const CartPage = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return <>{isLoading ? <CartDataLoadingFromApi /> : <LoadedCartData />}</>;
};

export default CartPage;
