import { ElementRef, EventEmitter } from '@angular/core';
export declare class AddProductComponent {
    el: ElementRef;
    addProduct: EventEmitter<{}>;
    constructor(el: ElementRef);
    addProductClick(event: any): void;
}
