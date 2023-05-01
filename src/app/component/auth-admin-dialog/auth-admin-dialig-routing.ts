import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthAdminDialogComponent} from './auth-admin-dialog.component';

const routes: Routes = [{ path: '', component: AuthAdminDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthAdminDialogRouting {}
