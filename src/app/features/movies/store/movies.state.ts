import { Movie } from "../../../core/models/movie.model";

export interface MoviesState {
    query: string;
    year?: string;
    page: number;
    loading: boolean;
    movies: Movie[];
    error?: string;
}

export const initialMoviesState: MoviesState = {
    query: '',
    year: '',
    page: 1,
    loading: false,
    movies: [],
};
