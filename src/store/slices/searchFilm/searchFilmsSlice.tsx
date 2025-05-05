import { createSlice,createAsyncThunk, PayloadAction  } from "@reduxjs/toolkit";
import API from "../../../api/api";
import { SearchState } from "../../../types/types";

export const getSearchedFilms = createAsyncThunk(
    "searchFilms",
    async () => {
        const res = await API.searchFilm()
        return res.data.result
    }
)

const initialState : SearchState= {
   result: []
}

const searchedSlice = createSlice({
    name: "searchFilm",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchedFilms.fulfilled, (state, action) => {
            state.result = action.payload
        })
    }
})

export default searchedSlice.reducer