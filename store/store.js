import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemslice";
import cartReducer from "./slices//cartslice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
  },
});
