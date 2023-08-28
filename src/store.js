import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./redux/SearchBox/SearchSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
  },
});
