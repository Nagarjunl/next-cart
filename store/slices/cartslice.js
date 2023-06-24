import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, { payload }) => {
      state.cartItems = addToCart(state, payload);
    },
    removeCartItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

const addToCart = (state, payload) => {
  return state.cartItems.concat(payload);
};

export const { addCartItems, clearCartItems, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
