import { Component } from '@angular/core';
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
  constructor(private readonly store: Store, private readonly auth: AuthService) { }

  login() {
    if (this.loginInProgress) return;

    this.loginInProgress = true;
    this.auth.loginWithGoogle().finally(() => this.loginInProgress = false);;
  }
}
