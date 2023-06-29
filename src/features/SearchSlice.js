import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  searchName: "",
};

export const searchSlice = createSlice({
  name: "searchArray",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.value = action.payload;
    },
    setSearchName: (state, action) => {
      console.log(action.payload);
      state.searchName = action.payload;
    },
  },
});

export const { setSearchData, setSearchName } = searchSlice.actions;

export default searchSlice.reducer;
