import { OmdbApiService } from '@core/services/omdb-api.service';
import { MovieApi } from '../contracts/movie-api.interface';

export const movieApiFactory = (): MovieApi => {
    return new OmdbApiService();
};
