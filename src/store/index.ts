import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";
import activeCategoryIdReducer from "./slices/activeCategoryId";
import searchFilterReducer from "./slices/searchFilter";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    activeCategory: activeCategoryIdReducer,
    searchFilter: searchFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
