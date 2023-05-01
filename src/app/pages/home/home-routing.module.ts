import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import {WarningDialogComponent} from "./warning-dialog/warning-dialog.component";

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      { path: 'warning', component: WarningDialogComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
