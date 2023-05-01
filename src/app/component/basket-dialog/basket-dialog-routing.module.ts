import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketDialogComponent} from './basket-dialog.component';

const routes: Routes = [{ path: '', component: BasketDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketDialogRoutingModule {}
