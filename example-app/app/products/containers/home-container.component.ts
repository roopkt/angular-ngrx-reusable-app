import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wa-home-container',
  template: `
  <pm-add-product-container></pm-add-product-container>
  `,
  styles: []
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
