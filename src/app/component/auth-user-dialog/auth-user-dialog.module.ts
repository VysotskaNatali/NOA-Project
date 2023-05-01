import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {AuthUserDialogComponent} from "./auth-user-dialog.component";
import {AuthUserDialogRoutingModule} from "./auth-user-dialog-routing.module";



@NgModule({
  declarations: [AuthUserDialogComponent],
  imports: [
    CommonModule,SharedModule,AuthUserDialogRoutingModule
  ]
})
export class AuthUserDialogModule { }
