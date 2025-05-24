import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { User } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user$: Observable<User | null>;
  isAuthReady = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
    this.auth.ready$.subscribe(ready => {
      this.isAuthReady = ready;
    });
  }

  logout() {
    this.auth.logout().then(() => this.router.navigate(['/login']));
  }
}
