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

import {Product } from '@wonderful/project-management';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    ProductManagementModule.

      CoreModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    // StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
