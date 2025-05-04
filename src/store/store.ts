import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import filmsSlice from "./slices/Films/FilmSlice";
import oneSelFilmSlice from "./slices/Films/selectFilmSlice";
import backgroundSlice from "../store/slices/backgroundSlice/backgroundSlice";
export const store = configureStore({
  reducer: {
    genres: genreSlice,
    films: filmsSlice,
    oneFilm: oneSelFilmSlice,
    background: backgroundSlice,
  },
});
