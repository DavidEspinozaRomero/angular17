import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./modules/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
