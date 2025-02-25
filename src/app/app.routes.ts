import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    canMatch: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
    ]
  },
  {
    path: '**',
    canMatch: [authGuard],
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
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
