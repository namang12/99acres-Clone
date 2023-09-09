import customFetch from "../../utils/axios";

export const searchSuggestionsThunk = async (url, searchTerm, thunkAPI) => {
  try {
    const resp = await customFetch.get(`${url}?searchTerm=${searchTerm}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
