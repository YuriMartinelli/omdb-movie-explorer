import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { OmdbApiService } from '@core/services/omdb-api.service';
import { Movie } from '@core/models/movie.model';
import { Action, provideStore } from '@ngrx/store';
import { MoviesEffects } from './movies.effects';
import { searchMovies, searchMoviesFailure, searchMoviesSuccess } from './movie.action';
import { moviesReducer } from './movie.reducer';

describe('MoviesEffects', () => {
    let actions$: Observable<Action>;
    let effects: MoviesEffects;
    let movieServiceSpy: jasmine.SpyObj<OmdbApiService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('OmdbApiService', ['searchMovies']);

        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                provideEffects(MoviesEffects),
                provideStore({ movies: moviesReducer }),
                { provide: OmdbApiService, useValue: spy }
            ]
        });

        effects = TestBed.inject(MoviesEffects);
        movieServiceSpy = TestBed.inject(OmdbApiService) as jasmine.SpyObj<OmdbApiService>;
    });

    it('should return searchMoviesSuccess on success', (done) => {
        const mockMovies: Movie[] = [
            { title: 'Batman', year: '1989', imdbID: 'tt0096895', type: 'movie', poster: 'poster.jpg' }
        ];

        const action = searchMovies({ query: 'Batman' });
        actions$ = of(action);
        movieServiceSpy.searchMovies.and.returnValue(Promise.resolve(mockMovies));

        effects.searchMovies$.subscribe(result => {
            expect(result).toEqual(searchMoviesSuccess({ movies: mockMovies }));
            done();
        });
    });

    it('should return searchMoviesFailure on error', (done) => {
        const action = searchMovies({ query: 'ErrorMovie' });
        actions$ = of(action);
        movieServiceSpy.searchMovies.and.returnValue(Promise.reject('API error'));

        effects.searchMovies$.subscribe(result => {
            expect(result).toEqual(searchMoviesFailure({ error: 'Failed to load movies' }));
            done();
        });
    });
});
