//cart store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPrice: (state, action) => {
      state.total += action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload.product);
      state.total += +action.payload.product.price;
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const cartItem = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.product.id !== product.id
        );
      }
      state.total -= product.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});


export const { addToCart, removeFromCart, clearCart , addPrice } = cartSlice.actions;


export default cartSlice.reducer;