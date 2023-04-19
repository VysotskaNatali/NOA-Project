import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { UserDataComponent } from './user-data/user-data.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';

@NgModule({
  declarations: [
    CabinetComponent,
    UserDataComponent,
    UserOrderHistoryComponent,
  ],
  imports: [CommonModule, SharedModule, CabinetRoutingModule],
})
export class CabinetModule {}
