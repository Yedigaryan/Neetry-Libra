// Angular core imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { authGuard } from '@core/guards/auth.guard';
import { isLoginGuard } from '@core/guards/is-login.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: '**',
    canMatch: [authGuard],
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    canMatch: [isLoginGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
