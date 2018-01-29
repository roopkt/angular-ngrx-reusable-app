import { Routes } from '@angular/router';
import { HomeContainerComponent } from './products/containers/home-container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: '@wonderful/product-management#ProductManagementModule',
  },
];
