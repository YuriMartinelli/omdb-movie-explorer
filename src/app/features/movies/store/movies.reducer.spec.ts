
import { initialMoviesState } from './movies.state';
import {
    searchMovies,
    searchMoviesSuccess,
    searchMoviesFailure
} from './movie.action';
import { Movie } from '@core/models/movie.model';
import { moviesReducer } from './movie.reducer';

describe('Movies Reducer', () => {
    it('should set loading to true and update query on searchMovies', () => {
        const action = searchMovies({ query: 'Batman', year: '1989' });
        const state = moviesReducer(initialMoviesState, action);

        expect(state.loading).toBeTrue();
        expect(state.query).toBe('Batman');
        expect(state.year).toBe('1989');
        expect(state.movies).toEqual([]);
        expect(state.error).toBeUndefined();
    });

    it('should store movies and set loading to false on searchMoviesSuccess', () => {
        const mockMovies: Movie[] = [
            {
                title: 'Batman',
                year: '1989',
                imdbID: 'tt0096895',
                type: 'movie',
                poster: 'poster.jpg'
            }
        ];

        const action = searchMoviesSuccess({ movies: mockMovies });
        const state = moviesReducer({ ...initialMoviesState, loading: true }, action);

        expect(state.loading).toBeFalse();
        expect(state.movies.length).toBe(1);
        expect(state.movies[0].title).toBe('Batman');
        expect(state.error).toBeUndefined();
    });

    it('should set error and loading to false on searchMoviesFailure', () => {
        const error = 'Network error';
        const action = searchMoviesFailure({ error });
        const state = moviesReducer({ ...initialMoviesState, loading: true }, action);

        expect(state.loading).toBeFalse();
        expect(state.error).toBe(error);
        expect(state.movies).toEqual([]);
    });
});
