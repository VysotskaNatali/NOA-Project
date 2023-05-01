import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {BasketDialogRoutingModule} from "./basket-dialog-routing.module";
import {BasketDialogComponent} from "./basket-dialog.component";



@NgModule({
  declarations: [BasketDialogComponent],
  imports: [
    CommonModule,SharedModule,BasketDialogRoutingModule
  ]
})
export class BasketDialogModule { }
