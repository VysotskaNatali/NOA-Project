import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PreOrderRoutingModule } from './pre-order-routing.module';
import { PreOrderComponent } from './pre-order.component';

@NgModule({
  declarations: [PreOrderComponent],
  imports: [CommonModule, SharedModule, PreOrderRoutingModule],
})
export class PreOrderModule {}
