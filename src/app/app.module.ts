import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';


import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { ProductComponent } from './pages/product/product.component';
import { PreOrderComponent } from './pages/pre-order/pre-order.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CabinetComponent,
    ProductComponent,
    PreOrderComponent,
    DeliveryComponent,
    FavoritesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
