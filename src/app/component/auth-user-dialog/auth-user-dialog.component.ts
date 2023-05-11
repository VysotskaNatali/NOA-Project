import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-auth-user-dialog',
  templateUrl: './auth-user-dialog.component.html',
  styleUrls: ['./auth-user-dialog.component.scss'],
})
export class AuthUserDialogComponent implements OnInit {
  public authForm!: FormGroup;
  public registForm!: FormGroup;

  public isLogin = true;
  public hide = true;
  public checkError = false;

  constructor(
    public fb: FormBuilder,
    public accountService: AccountService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AuthUserDialogComponent>
  ) {}

  ngOnInit(): void {
    this.initAuthForm();
    this.initRegistForm();
  }
  
  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  initRegistForm(): void {
    this.registForm = this.fb.group(
      {
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i),
          ],
        ],
        password: [null, [Validators.required, Validators.minLength(6)]],
        repassword: [null, [Validators.required, Validators.minLength(6)]],
        firstName: [null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
        phone: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
            ),
          ],
        ],
        checked: [null, [Validators.required]],
      },
      { validators: this.validPassword('password', 'repassword') }
    );
  }

  // My confirm password validation
  validPassword(password: any, repassword: any) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const repassControl = formGroup.controls[repassword];
      if (repassControl.errors && repassControl.errors['validPassword']) {
        return;
      }
      if (passControl.value !== repassControl.value) {
        repassControl.setErrors({ validPassword: true });
        this.checkError = true;
      } else {
        repassControl.setErrors(null);
        this.checkError = false;
      }
    };
  }

  loginUser(): void {
    const { email, password } = this.authForm.value;
    this.accountService
      .login(email, password)
      .then(() => {
        this.toastr.info('Вітаємо вас в кабінеті !');
        this.accountService.isUserLogin$.next(true);
      })
      .catch((e) => {
        this.toastr.error('Помилка вводу', e);
      });
     
  }

  registerUser(): void {
    const { email, password ,firstName ,lastName,phone} = this.registForm.value;
    this.accountService.register(email, password,firstName,lastName,phone)
    .then(() => {
      this.toastr.info('Вітаємо ви зареестровані !');
      this.isLogin = !this.isLogin;
      this.registForm.reset();
    })
    .catch((e) => {
      this.toastr.error('Помилка вводу даних', e);
    });
  }
}
