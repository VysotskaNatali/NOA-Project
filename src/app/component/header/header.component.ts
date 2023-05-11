import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserDialogComponent } from '../auth-user-dialog/auth-user-dialog.component';
import { ROLE } from 'src/app/shared/constants/role.constant';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user = '';
  public loginUrl = '';
  public isLogin = true;

  constructor(
    public dialog: MatDialog,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.checkUpdateUserLogin();
  }

  openLoginDialog(): void {
    this.dialog.open(AuthUserDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false,
      position: {
        top: '30px',
      },
    });
  }
  checkUserLogin(): void {
    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') as string
    );
    if (currentUser && currentUser.role === ROLE.ADMIN) {
      this.user = 'Admin';
      this.isLogin = false;
      this.loginUrl = 'admin';
    } else if (currentUser && currentUser.role === ROLE.USER) {
      this.user = currentUser.firstName;
      this.isLogin = false;
      this.loginUrl = 'cabinet';
    } else {
      this.isLogin = true;
    }
  }
  checkUpdateUserLogin(): void {
    this.accountService.isUserLogin$.subscribe(() => {
      this.checkUserLogin();
    });
  }
}
