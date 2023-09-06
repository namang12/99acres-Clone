import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";
import { registerUserThunk } from "./UserThunk";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  ismodalOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("UserAuthentication/RegisterUser", user, thunkAPI);
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        if (payload.message === "Email already exists") {
          state.isLoading = false;
          toast.error(payload.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          console.log(payload);
          state.isLoading = false;
          toast.success(`User registered succesfully, Now Login`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
