import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { User } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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

  private readonly subscription = new Subscription();
  ngOnInit() {
    const readySubscription = this.auth.ready$.subscribe(ready => {
      this.isAuthReady = ready;
    });
    this.subscription.add(readySubscription);
  }
  logout() {
    this.auth.logout().then(() => this.router.navigate(['/login']));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
