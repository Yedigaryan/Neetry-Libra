import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PersonsRoutingModule } from './persons-routing.module';


@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    PaginatorComponent,
    ReactiveFormsModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule {
}
