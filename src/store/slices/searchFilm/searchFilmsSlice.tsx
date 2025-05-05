import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";
import { SearchState } from "../../../types/types";

export const getSearchedFilms = createAsyncThunk(
  "searchFilms",
  async (query: string) => {
    const res = await API.searchFilm(query);
    return { results: res.data.results, query };
  }
);

const initialState: SearchState = {
  searchResults: [],
  searchQuery: "",
};

const searchedSlice = createSlice({
  name: "searchFilm",
  initialState,
  reducers: {
    clearSearch(state) {
        state.searchResults = [],
        state.searchQuery = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchedFilms.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      state.searchQuery = action.payload.query
    });
  },
});

export const { clearSearch } = searchedSlice.actions;
export default searchedSlice.reducer;
