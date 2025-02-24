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
    UsersRoutingModule
  ]
})
export class UsersModule {
}
