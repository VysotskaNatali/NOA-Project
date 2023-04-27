import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacanciesComponent } from './vacancies.component';
import {WokCookComponent} from "./wok-cook/wok-cook.component";
import {SushiCookComponent} from "./sushi-cook/sushi-cook.component";
import {BarmanComponent} from "./barman/barman.component";
import {RamenCookComponent} from "./ramen-cook/ramen-cook.component";


const routes: Routes = [
  {
    path: '',
    component: VacanciesComponent,
    children: [
      { path: 'wokCook', component: WokCookComponent },
      { path: 'sushiCook', component: SushiCookComponent },
      { path: 'ramenCook', component: RamenCookComponent },
      { path: 'barman', component: BarmanComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacanciesRoutingModule {}
