import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login.page';
import { MovieSearchPage } from './features/movies/pages/movie-search.page';
import { MovieDetailsPage } from './features/movies/pages/movie-details.page';

export const routes: Routes = [
    { path: 'movies', component: MovieSearchPage },
    {
        path: 'login',
        component: LoginPage,
    },
    { path: 'movies/:id', component: MovieDetailsPage },
    {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full',
    }
];
