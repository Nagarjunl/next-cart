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
  },
});

const addToCart = (state, payload) => {
  return state.cartItems.concat(payload);
};

export const { addCartItems } = cartSlice.actions;
export default cartSlice.reducer;
