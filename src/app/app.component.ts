import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchPage } from "./features/movies/pages/movie-search.page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieSearchPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omdb-movie-explorer';
}
