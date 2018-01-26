import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { ProductsModule } from '../src/products/products.module';
import { createConfig, INITIAL_OPTIONS, PRODUCT_MANAGEMENT_CONFIG, ProductManagementSettings } from './config';
import { AddProductContainerComponent } from './products/containers/add-product-container';
import { reducers } from './products/reducers';
import { AddProductComponent } from './products/components/add-product';

export const COMPONENTS = [
  AddProductContainerComponent,
  AddProductComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductsModule,
     /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('products', reducers)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ProductManagementModule {
  public static forFeature(settings: ProductManagementSettings = {}): ModuleWithProviders {
    return {
      ngModule: ProductManagementModule,
      providers: [
        {
          provide: INITIAL_OPTIONS,
          useValue: settings
        },
        {
          provide: PRODUCT_MANAGEMENT_CONFIG,
          deps: [INITIAL_OPTIONS],
          useFactory: createConfig,
        },
      ],
    };
  }
}
