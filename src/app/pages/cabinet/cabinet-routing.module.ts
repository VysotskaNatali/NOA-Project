import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CabinetComponent } from './cabinet.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: 'user', component: UserDataComponent },
      { path: 'history', component: UserOrderHistoryComponent },
      { path: '', pathMatch: 'full', redirectTo: 'history' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule {}
