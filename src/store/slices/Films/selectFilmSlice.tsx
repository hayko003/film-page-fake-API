// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { FilmsType, IResultFilmsSliceStateType } from "../../../types/types";
// import API from "../../../api/api";

// export const selectFilmThunk = createAsyncThunk<FilmsType, number> (
//     "selectFilmThunk",
//     async (id: number) => {
//         const res = await API.getOneFilm(id)
//         console.log(res);
//         return res.data
//     }
// )

// const initialState: IResultFilmsSliceStateType = {
//     result: null,
//     page: 1
// };

// const oneSelFilmSlice = createSlice({
//   name: "selectFilm",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(selectFilmThunk.fulfilled, (state, action) => {
//       state.result = action.payload;
//     });
//   },
// });

// export default oneSelFilmSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsType, IResultFilmsSliceStateType } from "../../../types/types";
import API from "../../../api/api";

export const selectFilmThunk = createAsyncThunk<FilmsType, number>(
  "selectFilmThunk",
  async (id: number) => {
    const res = await API.getOneFilm(id);
    console.log(res);
    return res.data;
  }
);

const initialState: IResultFilmsSliceStateType = {
  result: null,
  page: 1,
};

const oneSelFilmSlice = createSlice({
    name: "selectedFilm",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(selectFilmThunk.fulfilled, (state,action) => {
            state.result = action.payload
        })
    }
})

export default oneSelFilmSlice.reducer