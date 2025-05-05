
import axios from "axios";
import { FilmsType, GenresType } from "../types/types";

const apiKey = "803519ba7ff3afb03455d5aa8bb567c3";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

type GetGenersReturnType = {
  genres: Array<GenresType>;
};

type GetFilmReturnTyp = {
  page: number;
  results: Array<FilmsType>;
};

type SearchFilmsReturnType = {
  page: number;
  results: Array<FilmsType>;
  total_pages: number;
  total_results: number;
};

const API = {
  getGenres() {
    return instance.get<GetGenersReturnType>(
      `/genre/movie/list?api_key=${apiKey}&language=en-US&include_adult=false`
    );
  },
  getFilms(pageCount: number) {
    return instance.get<GetFilmReturnTyp>(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}&include_adult=false`
    );
  },
  getOneFilm(id: number) {
    return instance.get<FilmsType>(
      `/movie/${id}?api_key=${apiKey}&language=en-US&include_adult=false`
    );
  },
  searchFilm(query: string) {
    return instance.get<SearchFilmsReturnType>(
      `/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&include_adult=false`
    );
  },
};
export default API