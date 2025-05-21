import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApi } from '../contracts/movie-api.interface';
import { adaptMovie } from '../adapters/movie.adapter';

const API_KEY = '68b7a486';

export class OmdbApiService implements MovieApi {
    private readonly http = inject(HttpClient);

    async searchMovies(query: string, year?: string, page = 1) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
        const res: any = this.http.get(url);
        return res.Search?.map(adaptMovie) ?? []
    }
}
