import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { AdminOrderComponent } from '../admin/admin-order/admin-order.component';
import { AdminProductComponent } from '../admin/admin-product/admin-product.component';
import { AdminCategoryComponent } from '../admin/admin-category/admin-category.component';
import { AdminVacanciesComponent } from './admin-vacancies/admin-vacancies.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminCategoryComponent,
    AdminOrderComponent,
    AdminProductComponent,
    AdminVacanciesComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}
