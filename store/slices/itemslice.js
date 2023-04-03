import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  value: [
    {
      name: "chakra",
      rate: 50,
    },
    {
      name: "bush",
      rate: 500,
    },
  ],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // Action to add item
    addItem: (state, action) => {
      state.value = [...state.value, action.payload];
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

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
