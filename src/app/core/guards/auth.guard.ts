import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route: Route, segments): boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);

  return authService.isLoggedIn();
};
