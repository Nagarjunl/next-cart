import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/itemslice";
import cartReducer from "./slices/cartslice";
import userReducer from "./slices/userslice";

import { combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items", "cart", "user"],
};

const rootReducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
