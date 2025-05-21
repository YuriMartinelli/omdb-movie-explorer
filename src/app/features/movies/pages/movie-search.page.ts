import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../core/models/movie.model';
import { OmdbApiService } from '../../../core/services/omdb-api.service';
@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-search.page.html',
})
export class MovieSearchPage {
  query = '';
  year = '';
  movies: Movie[] = [];
  loading = false;
  hasSearched = false;

  constructor(private readonly movieService: OmdbApiService) { }

  async searchMovies() {
    if (!this.query.trim()) return;
    this.loading = true;
    this.hasSearched = true;

    try {
      this.movies = await this.movieService.searchMovies(this.query, this.year);
    } catch (err) {
      console.error('Error fetching movies:', err);
      this.movies = [];
    }

    this.loading = false;
  }
}
