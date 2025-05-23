import { createReducer, on } from '@ngrx/store';
import { initialMoviesState } from './movies.state';
import { searchMovies, searchMoviesFailure, searchMoviesSuccess } from './movie.action';

export const moviesReducer = createReducer(
    initialMoviesState,
    on(searchMovies, (state, { query, year, page }) => ({
        ...state,
        query,
        year,
        page: page || 1,
        loading: true,
        error: undefined,
    })),
    on(searchMoviesSuccess, (state, { movies }) => ({
        ...state,
        loading: false,
        movies,
    })),
    on(searchMoviesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
