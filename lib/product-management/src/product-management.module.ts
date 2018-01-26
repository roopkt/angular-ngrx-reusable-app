import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsModule } from '../src/products/products.module';
import { createConfig, INITIAL_OPTIONS, PRODUCT_MANAGEMENT_CONFIG, ProductManagementSettings } from './config';
import { AddProductContainerComponent } from './products/containers/add-product-container';

export const COMPONENTS = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductsModule,
    RouterModule.forChild([
      { path: '', component: AddProductContainerComponent },
    ])],
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
