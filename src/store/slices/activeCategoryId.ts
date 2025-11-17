import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ActiveCategoryIdState {
  activeCategoryId: number | null;
}

const initialState: ActiveCategoryIdState = {
  activeCategoryId: null,
};

export const activeCategoryIdSlice = createSlice({
  name: "activeCategoryId",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number | null>) => {
      state.activeCategoryId = action.payload;
    },
    clearActiveCategory: (state) => {
      state.activeCategoryId = null;
    },
  },
});

export const { setActiveCategory, clearActiveCategory } =
  activeCategoryIdSlice.actions;

export default activeCategoryIdSlice.reducer;
