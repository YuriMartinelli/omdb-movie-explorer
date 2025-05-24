import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.ready$.pipe(
        take(1),
        map(() => {
            if (authService.isAuthenticated) {
                return true;
            }
            router.navigate(['/login']);
            return false;
        })
    );
};
