// Angular Core imports
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

// Application services
import { AuthService } from '@core/services/auth.service';

export const isLoginGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);

  return !authService.isLoggedIn();
};
