import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  imports: [],
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  loginInProgress = false;
  constructor(private readonly store: Store, private readonly auth: AuthService, private readonly router: Router) { }

  login() {
    if (this.loginInProgress) return;

    this.loginInProgress = true;
    this.auth.loginWithGoogle()
      .then(() => this.router.navigate(['/movies']))
      .finally(() => this.loginInProgress = false);
  }
}
