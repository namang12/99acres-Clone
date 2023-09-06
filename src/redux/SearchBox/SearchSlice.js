import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expanded: ["panel1", "panel2", "panel3", "panel4"],
  searchOption: "Buy",
  budgetRange: [0, 200000],
  noOfBedrooms: [],
  propertyType: [],
  area: [0, 4000],
  withPhotos: false,
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      if (state.expanded.includes(payload)) {
        const arr = state.expanded.filter((item) => item !== payload);
        return { ...state, expanded: arr };
      } else {
        return { ...state, expanded: [...state.expanded, payload] };
      }
    },
    handleSearchOption: (state, { payload }) => {
      state.searchOption = payload;
    },
    handleBudgetRange: (state, { payload }) => {
      state.budgetRange = payload;
    },
    handleNoOfBedrooms: (state, { payload }) => {
      if (state.noOfBedrooms.includes(payload)) {
        const arr = state.noOfBedrooms.filter((item) => item !== payload);
        return { ...state, noOfBedrooms: arr };
      } else {
        return { ...state, noOfBedrooms: [...state.noOfBedrooms, payload] };
      }
    },
    handlePropertyType: (state, { payload }) => {
      if (state.propertyType.includes(payload)) {
        const arr = state.propertyType.filter((item) => item !== payload);
        return { ...state, propertyType: arr };
      } else {
        return { ...state, propertyType: [...state.propertyType, payload] };
      }
    },
    handleArea: (state, { payload }) => {
      state.area = payload;
    },
    handleWithPhotos: (state) => {
      state.withPhotos = !state.withPhotos;
    },
    clearSearchState: (state) => initialState,
  },
});

export const {
  handleSearchOption,
  handleBudgetRange,
  handleNoOfBedrooms,
  handlePropertyType,
  handleArea,
  handleWithPhotos,
  handleChange,
  clearSearchState,
} = SearchSlice.actions;
export default SearchSlice.reducer;
