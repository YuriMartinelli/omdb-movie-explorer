import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchPage } from "./features/movies/pages/movie-search.page";
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieSearchPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omdb-movie-explorer';

  constructor(private readonly auth: AuthService) { }

  ngOnInit() {
    this.auth.ready$.subscribe((ready) => {
      if (ready) {
        console.log('✅ Auth ready, user:', this.auth.currentUser);
      }
    });
  }
}
