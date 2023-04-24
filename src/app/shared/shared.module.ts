import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

const MATERIAL = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
  MatSidenavModule
];


@NgModule({
    declarations: [],
    imports: [...MATERIAL, ReactiveFormsModule,SwiperModule],
    exports: [...MATERIAL, ReactiveFormsModule,SwiperModule],
    providers: [],
  })
  export class SharedModule {}