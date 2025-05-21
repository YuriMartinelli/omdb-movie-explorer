import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login.page';
import { MovieSearchPage } from './features/movies/pages/movie-search.page';

export const routes: Routes = [
    { path: 'movies', component: MovieSearchPage },
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }
];
