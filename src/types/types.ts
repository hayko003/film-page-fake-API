/// ReduxSliceType

export type GenresType = {
    id: number,
    name: string
}

export type genresSliceStateType = {
    genres: Array< GenresType>
}

export interface FilmsType {
    adult: boolean,
    backdrop_path: string
    genre_ids: number[];
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IResultFilmsSliceStateType {
    page: number,
    result: Array<FilmsType>,
}