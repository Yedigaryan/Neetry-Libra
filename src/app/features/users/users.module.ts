// Angular Core imports
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material imports
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Feature Components
import { UsersComponent } from './users.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatRipple } from '@angular/material/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from '@angular/material/table';

@NgModule({
  declarations: [UsersComponent, UserModalComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    UsersRoutingModule,
    MatRipple,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ]
})
export class UsersModule {
}
