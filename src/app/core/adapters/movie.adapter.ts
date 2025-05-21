import { Movie } from '../models/movie.model';

export const adaptMovie = (raw: any): Movie => ({
    title: raw.Title,
    year: raw.Year,
    imdbID: raw.imdbID,
    type: raw.Type,
    poster: raw.Poster,
});
