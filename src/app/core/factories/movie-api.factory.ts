import { MovieApi } from '../contracts/movie-api.interface';
import { OmdbApiService } from '../services/omdb-api.service';

export const movieApiFactory = (): MovieApi => {
    return new OmdbApiService();
};
