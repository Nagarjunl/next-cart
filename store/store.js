import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemslice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});
