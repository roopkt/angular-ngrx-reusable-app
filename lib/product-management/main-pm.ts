import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { ProductManagementModule } from 'lib/product-management/src';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductManagementModule)
  .catch(err => console.log(err));
