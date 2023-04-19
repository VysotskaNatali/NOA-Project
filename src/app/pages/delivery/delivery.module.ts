import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DeliveryComponent } from './delivery.component';
import { DeliveryRoutingModule } from './delivery-routing.module';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, SharedModule, DeliveryRoutingModule],
})
export class DeliveryModule {}
