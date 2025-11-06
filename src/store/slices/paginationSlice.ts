import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  productsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  productsPerPage: 12,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
