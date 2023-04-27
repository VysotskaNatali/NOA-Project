import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {VacanciesRoutingModule} from "./vacancies-routing.module";
import {VacanciesComponent} from "./vacancies.component";
import { RamenCookComponent } from './ramen-cook/ramen-cook.component';
import { SushiCookComponent } from './sushi-cook/sushi-cook.component';
import { WokCookComponent } from './wok-cook/wok-cook.component';
import { BarmanComponent } from './barman/barman.component';



@NgModule({
  declarations: [VacanciesComponent, RamenCookComponent, SushiCookComponent, WokCookComponent, BarmanComponent],
  imports: [
    CommonModule,SharedModule,VacanciesRoutingModule
  ]
})
export class VacanciesModule { }
