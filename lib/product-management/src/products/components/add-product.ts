import { Component, Input, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Output } from '@angular/core';

@Component({
    selector: 'pm-add-product',
    template: `
        <div>
        <form (ngSubmit)="addProductClick($event)">
            <p>Product Name:<input type="text" name="prodName" id="prodName"></p>
        </form>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
    @Output() addProduct = new EventEmitter();

    constructor(public el: ElementRef) {

    }

    addProductClick(event) {
        const name = this.el.nativeElement.value;
        this.addProduct.emit(name);
    }
}

