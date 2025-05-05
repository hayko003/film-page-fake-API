import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";
import { FilmsType, IResultFilmsSliceStateType } from "../../../types/types";
export const getFilmsThunk = createAsyncThunk<Array<FilmsType>, number>(
  "getFilmsThunk",
  async (page: number) => {
    const res = await API.getFilms(page);
    const filtered = res.data.results.filter((film) => !film.adult);
    return filtered;
  }
);

const initialState: IResultFilmsSliceStateType = {
  result: [],
  page: 1,
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmsThunk.fulfilled, (state, action) => {
        state.result = action.payload
    })
  }
});

export default filmsSlice.reducer;
