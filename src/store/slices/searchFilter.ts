import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchFilterState {
  searchByProducts: string;
}

const initialState: SearchFilterState = {
  searchByProducts: "",
};

export const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchByProducts = action.payload;
    },
  },
});

export const { setSearchFilter } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
