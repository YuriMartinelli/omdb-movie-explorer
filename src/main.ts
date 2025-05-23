import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { moviesReducer } from './app/features/movies/store/movie.reducer';
import { MoviesEffects } from '@features/movies/store/movies.effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from 'environment/environment';
import { browserLocalPersistence, getAuth, provideAuth, setPersistence } from '@angular/fire/auth';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ movies: moviesReducer }),
    provideEffects([MoviesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => {
      const auth = getAuth();
      setPersistence(auth, browserLocalPersistence);
      return auth;
    }),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
});