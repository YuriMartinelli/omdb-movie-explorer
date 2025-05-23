import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../core/models/movie.model';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchMovies } from '../store/movie.action';
import { selectMovieError, selectMovieLoading, selectMovieResults } from '../store/movies.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './movie-search.page.html',
})
export class MovieSearchPage implements OnInit {
  query = '';
  year = '';

  movies$!: Observable<Movie[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null | undefined>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMovieResults);
    this.loading$ = this.store.select(selectMovieLoading);
    this.error$ = this.store.select(selectMovieError);
  }
  searchMovies() {
    if (!this.query.trim()) return;
    this.store.dispatch(searchMovies({ query: this.query, year: this.year }));
  }
}
