import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  searchData: [],
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
    setSearchData: (state, action) => {
      console.log("action", action.payload);
      state.searchData = action.payload;
    },
  },
});

export const { setProducts, removeProduct, setSearchData } =
  productSlice.actions;

export default productSlice.reducer;
