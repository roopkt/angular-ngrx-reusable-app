import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductManagementSettings, INITIAL_OPTIONS, PRODUCT_MANAGEMENT_CONFIG, createConfig } from './config';
import { ProductsModule } from '../src/products/products.module';

export const COMPONENTS = [
];

@NgModule({
  imports: [CommonModule, RouterModule, ProductsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ProductManagementModule {
  static forRoot(settings: ProductManagementSettings = {}): ModuleWithProviders {
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
