import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductManagementModule } from '../product-management/src';

platformBrowserDynamic().bootstrapModule(ProductManagementModule)
  .catch(err => console.log(err));
