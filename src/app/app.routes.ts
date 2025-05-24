import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login.page';
import { MovieSearchPage } from './features/movies/pages/movie-search.page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    {
        path: 'movies',
        component: MovieSearchPage,
        canActivate: [() => import('@core/guards/auth.guard').then(m => m.authGuard)]
    },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: '**', redirectTo: 'movies' }
];
