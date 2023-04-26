import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, 
    SharedModule, 
    ContactRoutingModule,
    GoogleMapsModule,
  ],
})
export class ContactModule {}
