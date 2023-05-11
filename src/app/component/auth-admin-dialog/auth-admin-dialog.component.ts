import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-admin-dialog',
  templateUrl: './auth-admin-dialog.component.html',
  styleUrls: ['./auth-admin-dialog.component.scss']
})
export class AuthAdminDialogComponent implements OnInit{

  public authForm!: FormGroup;
  public hide = true;
  public checkError = false;

  constructor(
    public fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.initAuthForm();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?!.*admin)[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          ),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }

  loginAdmin():void{

  }

}
