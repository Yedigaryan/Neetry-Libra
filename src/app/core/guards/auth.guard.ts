// Angular Core imports
import { inject } from '@angular/core';
import { CanMatchFn, UrlTree } from '@angular/router';

// Application services
import { AuthService } from '../services/auth.service';


export const authGuard: CanMatchFn = (): boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);

  return authService.isLoggedIn();
};
