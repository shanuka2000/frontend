import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productsSlice";
import searchReducer from "../features/SearchSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
  },
});
