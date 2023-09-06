import axios from "axios";
// import { clearStore } from "../features/user/UserSlice";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.userToken.jwtToken}`;
  }
  return config;
});

export default customFetch;
