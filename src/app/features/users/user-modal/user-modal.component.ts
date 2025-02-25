// Angular Core imports
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Angular Material imports
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { IUser } from '@core/interfaces/IUser';

export interface UserModalData {
  mode: 'create' | 'edit';
  user?: IUser;
}

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  userForm: FormGroup;
  mode: 'create' | 'edit';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModalData
  ) {
    this.mode = data.mode;
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      avatar: ['']
    });
  }

  ngOnInit(): void {
    if (this.mode === 'edit' && this.data.user) {
      this.userForm.patchValue({
        email: this.data.user.email,
        firstname: this.data.user.first_name,
        lastname: this.data.user.last_name,
        avatar: this.data.user.avatar
      });
    }
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
