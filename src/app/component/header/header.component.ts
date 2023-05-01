import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserDialogComponent } from '../auth-user-dialog/auth-user-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {}

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
  

}
