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
    page: number,
    results: Array<FilmsType> 
}

type GetSelFilmType = {
  result: FilmsType
  text: string
}

const API = {
  getGenres() {
    return instance.get<GetGenersReturnType>(
      `/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
  },
  getFilms(pageCount: number) {
    return instance.get<GetFilmReturnTyp>(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`
    );
  },
  getOneFilm(id: number) {
    return instance.get<GetSelFilmType>(
      `/movie/${id}?api_key=${apiKey}&language=en-US`
    )
  },
  searchFilm(){
    return instance.get<GetSelFilmType>(
      `search/movie?api_key=${apiKey}&query=${text}`
    )
  }
};

export default API;
