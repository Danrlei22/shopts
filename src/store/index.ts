import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";
import activeCategoryIdReducer from "./slices/activeCategoryId";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    activeCategory: activeCategoryIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
