import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {AuthAdminDialogComponent} from "./auth-admin-dialog.component";
import {AuthAdminDialogRouting} from "./auth-admin-dialig-routing";

@NgModule({
  declarations: [AuthAdminDialogComponent],
  imports: [
    CommonModule,SharedModule,AuthAdminDialogRouting
  ]
})
export class AuthAdminDialogModule { }
