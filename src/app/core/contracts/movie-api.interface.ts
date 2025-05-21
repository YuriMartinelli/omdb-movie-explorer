import { Movie } from '../models/movie.model';

export interface MovieApi {
    searchMovies(query: string, year?: string, page?: number): Promise<Movie[]>;
}
