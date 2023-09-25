import { createSlice } from "@reduxjs/toolkit";
import dummyProducts from "../../lib/products";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/interface";

interface CartState {
  items: any;
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find(
        (item: any) => item._id === newItem._id
      );
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;
      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          image: dummyProducts,
        });
      }
    },
  },
});
