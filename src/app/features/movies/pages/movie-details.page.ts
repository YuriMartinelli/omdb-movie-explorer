import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OmdbApiService } from '@core/services/omdb-api.service';


@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.page.html',
  styleUrl: './movie-details.page.css'
})
export class MovieDetailsPage {
  movie: any = null;
  loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: OmdbApiService
  ) {
    const imdbID = this.route.snapshot.paramMap.get('id');
    if (imdbID) this.loadDetails(imdbID);
  }

  async loadDetails(id: string) {
    this.loading = true;
    this.movie = await this.api.getMovieById(id);
    this.loading = false;
  }
}