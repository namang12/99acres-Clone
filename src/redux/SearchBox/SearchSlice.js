import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchOption: "Buy",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearchOption: (state, { payload }) => {
      state.searchOption = payload;
    },
  },
});

export const { handleSearchOption } = SearchSlice.actions;
export default SearchSlice.reducer;
