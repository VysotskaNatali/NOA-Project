import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthUserDialogComponent } from './auth-user-dialog.component';

const routes: Routes = [{ path: '', component: AuthUserDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthUserDialogRoutingModule {}
