import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, from } from 'rxjs';
import {
    searchMovies,
    searchMoviesSuccess,
    searchMoviesFailure
} from './movie.action';
import { OmdbApiService } from '@core/services/omdb-api.service';

@Injectable()
export class MoviesEffects {
    searchMovies$ = createEffect(() => {
        const actions$ = inject(Actions); // ✅ inside createEffect
        const movieService = inject(OmdbApiService); // ✅ inside createEffect

        return actions$.pipe(
            ofType(searchMovies),
            mergeMap(({ query, year, page }) =>
                from(movieService.searchMovies(query, year, page)).pipe(
                    map(movies => searchMoviesSuccess({ movies })),
                    catchError(() =>
                        of(searchMoviesFailure({ error: 'Failed to load movies' }))
                    )
                )
            )
        );
    });
}
