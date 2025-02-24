// Angular Core imports
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Feature Components
import { UserModalComponent } from './user-modal/user-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

// Interfaces
import { User } from '@core/interfaces/user';

// Services
import { UsersService } from '@core/services/users.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(response => {
      this.users = response.data;
    });
  }

  createUser(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.createUser(result).subscribe(() => this.loadUsers());
      }
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px',
      data: { mode: 'edit', user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.updateUser(user.id, result).subscribe(() => this.loadUsers());
      }
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this user?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.usersService.deleteUser(user.id).subscribe(() => this.loadUsers());
      }
    });
  }
}
