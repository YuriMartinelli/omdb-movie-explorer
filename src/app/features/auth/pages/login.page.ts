import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  constructor(private readonly store: Store, private readonly auth: AuthService) { }

  login() {
    this.auth.loginWithGoogle();
  }
}
