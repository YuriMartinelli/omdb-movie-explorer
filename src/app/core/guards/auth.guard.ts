import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, switchMap, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.ready$.pipe(
        switchMap(() => authService.user$), // ✅ wait for user AFTER Firebase initializes
        take(1),
        map(user => {
            if (user) return true;

            router.navigate(['/login']);
            return false;
        })
    );
};
