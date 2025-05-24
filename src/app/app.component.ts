import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'omdb-movie-explorer';

  isAuthReady = false;

  constructor(private readonly auth: AuthService) { }

  ngOnInit() {
    this.auth.ready$.subscribe(ready => {
      this.isAuthReady = ready;
    });
  }
}
