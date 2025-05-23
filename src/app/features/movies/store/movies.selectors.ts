import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.state';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMovieResults = createSelector(
    selectMoviesState,
    (state) => state.movies
);

export const selectMovieLoading = createSelector(
    selectMoviesState,
    (state) => state.loading
);

export const selectMovieError = createSelector(
    selectMoviesState,
    (state) => state.error
);
