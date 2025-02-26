// Angular Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// Material imports
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from '@angular/material/input';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

// Routing modules
import { PersonsRoutingModule } from './persons-routing.module';

// Feature Components
import { PersonsComponent } from './persons.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';



@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    PaginatorComponent,
    ReactiveFormsModule,
    PersonsRoutingModule,
    MatProgressSpinner,
    MatFormField,
    MatInput,
    MatLabel,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ]
})
export class PersonsModule {
}
