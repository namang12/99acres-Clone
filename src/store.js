import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./redux/SearchBox/SearchSlice";
import SearchModalSlice from "./redux/SearchModal/SearchModalSlice";
import UserSlice from "./redux/User/UserSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    searchModal: SearchModalSlice,
    user: UserSlice,
  },
});
