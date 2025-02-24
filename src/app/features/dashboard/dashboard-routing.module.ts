import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../../features/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../../features/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'persons',
        loadChildren: () =>
          import('../../features/persons/persons.module').then((m) => m.PersonsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
