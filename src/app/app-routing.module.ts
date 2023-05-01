import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('./pages/cabinet/cabinet.module').then((m) => m.CabinetModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./pages/delivery/delivery.module').then((m) => m.DeliveryModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'offerta',
    loadChildren: () =>
      import('./pages/offerta/offerta.module').then((m) => m.OffertaModule),
  },
  {
    path: 'preOrder',
    loadChildren: () =>
      import('./pages/pre-order/pre-order.module').then((m) => m.PreOrderModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'vacancies',
    loadChildren: () =>
      import('./pages/vacancies/vacancies.module').then((m) => m.VacanciesModule),
  },
  {
    path: 'authUser',
    loadChildren: () =>
      import('./component/auth-user-dialog/auth-user-dialog.module').then((m) => m.AuthUserDialogModule),
  },
  {
    path: 'authAdmin',
    loadChildren: () =>
      import('./component/auth-admin-dialog/auth-admin-dialog.module').then((m) => m.AuthAdminDialogModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./component/basket-dialog/basket-dialog.module').then((m) => m.BasketDialogModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
