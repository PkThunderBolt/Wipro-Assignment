import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

// Configure the Redux store with the product reducer
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
