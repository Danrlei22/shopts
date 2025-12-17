import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";
import activeCategoryIdReducer from "./slices/activeCategoryId";
import searchFilterReducer from "./slices/searchFilter";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    activeCategory: activeCategoryIdReducer,
    searchFilter: searchFilterReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export const useAppDispatch: ()  => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
