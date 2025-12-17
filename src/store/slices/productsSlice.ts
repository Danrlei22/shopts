import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import productsData from "../../data/products.json";

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return productsData as Product[];
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
