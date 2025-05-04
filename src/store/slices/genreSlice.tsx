import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../api/api";
import { genresSliceStateType, GenresType } from "../../types/types";

export const getGenres = createAsyncThunk<Array<GenresType>>(
    "getGenres",
    async () => {
        const res = await API.getGenres()
        return res.data.genres
    } 
)

const initialState : genresSliceStateType= {
    genres: []
}

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        getSyncGenres(state,action) {
            state.genres = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state,action: PayloadAction<Array<GenresType>>) => {
            state.genres = action.payload
        })
    }
})

export const {getSyncGenres} = genreSlice.actions
export default genreSlice.reducer