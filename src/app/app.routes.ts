import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login.page';
import { MovieSearchPage } from './features/movies/pages/movie-search.page';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'movies', component: MovieSearchPage, canActivate: [authGuard] },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: '**', redirectTo: 'movies' }
];
