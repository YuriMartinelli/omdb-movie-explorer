import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../core/models/movie.model';

export const searchMovies = createAction(
    '[Movies] Search',
    props<{ query: string; year?: string; page?: number }>()
);

export const searchMoviesSuccess = createAction(
    '[Movies] Search Success',
    props<{ movies: Movie[] }>()
);

export const searchMoviesFailure = createAction(
    '[Movies] Search Failure',
    props<{ error: string }>()
);
