import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container.component';

const COMPONENTS = [HomeContainerComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class WebProductModule { }
