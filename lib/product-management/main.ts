import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductsModule } from '../product-management/src/products/products.module';

platformBrowserDynamic().bootstrapModule(ProductsModule)
  .catch(err => console.log(err));
