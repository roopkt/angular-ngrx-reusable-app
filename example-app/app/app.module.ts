import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './core/containers/app.component';
import { routes } from './routes';
import { HomeContainerComponent } from './products/containers/home-container.component';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { ProductManagementModule } from '@wonderful/product-management';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    ProductManagementModule.forFeature({ baseUrl: 'someurl' })
    // StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
