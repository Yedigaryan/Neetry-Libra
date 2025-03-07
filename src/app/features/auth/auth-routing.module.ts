// Angular Core imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Feature Components
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
