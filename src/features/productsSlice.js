import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "productsArray",
  initialState,
  reducers: {
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.value = state.value.filter((product) => product._id !== productId);
    },
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer;
