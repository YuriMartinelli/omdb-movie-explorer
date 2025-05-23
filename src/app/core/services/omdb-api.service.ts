import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MovieApi } from '../contracts/movie-api.interface';
import { adaptMovie } from '../adapters/movie.adapter';

const API_KEY = '68b7a486';

@Injectable({ providedIn: 'root' })
export class OmdbApiService implements MovieApi {
    private readonly http = inject(HttpClient);

    async searchMovies(query: string, year?: string, page = 1) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}${year ? `&y=${year}` : ''}`;
        try {
            const res: any = await firstValueFrom(this.http.get(url));
            return res.Search?.map(adaptMovie) ?? [];
        } catch (error) {
            console.error('OMDB API error:', error);
            return [];
        }
    }

    async getMovieById(imdbID: string) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
        try {
            const res: any = await firstValueFrom(this.http.get(url));
            return res;
        } catch (error) {
            console.error('Error loading movie details:', error);
            return null;
        }
    }
}
