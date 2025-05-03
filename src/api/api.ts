import axios from "axios";
import { FilmsType, GenresType } from "../types/types";

type GetGenersReturnType = {
  genres: Array<GenresType>;
};

type GetFilmReturnTyp = {
    page: number,
    results: Array<FilmsType> 
}

const apiKey = "803519ba7ff3afb03455d5aa8bb567c3";

const instane = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API = {
  getGenres() {
    return instane.get<GetGenersReturnType>(
      `/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
  },
  getFilms(pageCount: number) {
    return instane.get<GetFilmReturnTyp>(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`
    );
  },
};

export default API;
