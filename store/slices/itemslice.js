import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  items: [
    {
      id: 1,
      name: "item 1",
      price: 100,
      img: "img/logo.png",
      total: "",
    },
    {
      id: 2,
      name: "item 2",
      price: 150.5,
      img: "img/logo.png",
      total: "",
    },
    {
      id: 3,
      name: "item 3",
      price: 200,
      img: "img/logo.png",
      total: "",
    },
    {
      id: 4,
      name: "item 4",
      price: 250.5,
      img: "img/logo.png",
      total: "",
    },
    {
      id: 5,
      name: "item 5",
      price: 300,
      img: "img/logo.png",
      total: "",
    },
    {
      id: 6,
      name: "item 6",
      price: 350.5,
      img: "img/logo.png",
      total: "",
    },
  ],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // Action to add item
    addItem: (state, { payload }) => {
      state.items = payload;
      // state.items = addItemTo(state, payload);
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.items,
        };
      },
    },
  },
});

const addItemTo = (state, payload) => {};

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
