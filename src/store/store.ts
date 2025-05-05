import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import filmsSlice from "./slices/Films/FilmSlice";
import oneSelFilmSlice from "./slices/Films/selectFilmSlice";
import backgroundSlice from "../store/slices/backgroundSlice/backgroundSlice";
import searchedSlice from "../store/slices/searchFilm/searchFilmsSlice"
export const store = configureStore({
  reducer: {
    genres: genreSlice,
    films: filmsSlice,
    oneFilm: oneSelFilmSlice,
    background: backgroundSlice,
    searchedFilm: searchedSlice
  },
});
