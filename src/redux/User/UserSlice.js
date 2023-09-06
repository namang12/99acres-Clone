import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
} from "./UserThunk";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  ismodalOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk(
      "/UserAuthentication/RegisterUser",
      user,
      thunkAPI
    );
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/UserAuthentication/LoginUser", user, thunkAPI);
  }
);

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        if (payload.isSuccess === false) {
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (payload.isSuccess === false) {
          state.isLoading = false;
          toast.error(payload.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          const user = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Welcome Back ${user.data.userName}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(clearStore.rejected, () => {
        toast.error("There was an error..");
      });
  },
});

export const { logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
