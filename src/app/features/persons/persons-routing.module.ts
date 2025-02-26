// Angular Core imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Feature Components
import { PersonsComponent } from './persons.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule {
}
