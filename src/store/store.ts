// import { configureStore } from "@reduxjs/toolkit";
// import genreSlice from "./slices/genreSlice"

// export const store = configureStore({
//     reducer: {
//         genres: genreSlice
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import filmsSlice from "./slices/Films/FilmSlice"

export const store = configureStore({
    reducer: {
        genres: genreSlice,
        films: filmsSlice
    }
})
