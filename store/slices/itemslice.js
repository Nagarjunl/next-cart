import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  items: [
    {
      category: "Paruppu",
      items: [
        {
          id: 1,
          name: "item 1",
          price: 100,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 2,
          name: "item 2",
          price: 150.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 3,
          name: "item 3",
          price: 200,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 4,
          name: "item 4",
          price: 250.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 5,
          name: "item 5",
          price: 300,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 6,
          name: "item 6",
          price: 350.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
      ],
    },
    {
      category: "Seruppu",
      items: [
        {
          id: 7,
          name: "item 7",
          price: 100,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 8,
          name: "item 8",
          price: 150.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 9,
          name: "item 9",
          price: 200,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 10,
          name: "item 10",
          price: 250.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 11,
          name: "item 11",
          price: 300,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
        {
          id: 12,
          name: "item 12",
          price: 350.5,
          qty: "",
          discount: 5,
          img: "img/logo.png",
          total: "",
        },
      ],
    },
  ],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items = payload;
    },
    clearItem: (state) => {
      state.items = initialState.items;
    },

    extraReducers: {
      [HYDRATE]: (state) => {
        return {
          ...state,
          ...payload.items,
        };
      },
    },
  },
});

export const { addItem, clearItem } = itemSlice.actions;
export default itemSlice.reducer;
