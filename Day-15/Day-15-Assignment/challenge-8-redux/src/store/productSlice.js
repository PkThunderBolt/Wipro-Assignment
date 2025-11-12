// This implementation uses Redux Toolkit to manage global state for product data
// It includes async API fetching, product updates, and store configuration

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API to simulate backend data fetching
const mockApi = {
  fetchProducts: () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { id: 1, name: "Laptop", price: 70000 },
            { id: 2, name: "Smartphone", price: 35000 },
            { id: 3, name: "Television", price: 5000 },
          ]),
        1000
      )
    ),
};

// Async thunk for fetching products (works like ngrx-effects in Angular)
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await mockApi.fetchProducts();
    return response;
  }
);

// Create a Redux slice to handle product state, actions, and reducers
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // list of products
    status: "idle", // loading state: idle | loading | succeeded | failed
  },
  reducers: {
    // Reducer to update product data in the store
    updateProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.items.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
      }
    },
  },
  // Handle async actions created by createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // loading started
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // loading succeeded
        state.items = action.payload; // store fetched data
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed"; // loading failed
      });
  },
});

// Export actions and reducer
export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
