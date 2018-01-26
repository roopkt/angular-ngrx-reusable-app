import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Add } from '../actions/Product';

@Component({
    selector: 'pm-add-product-container',
    template: `
        <div>
        <pm-add-product (addProduct)="addProduct($event)"></pm-add-product>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductContainerComponent {
    constructor(private store: Store<State>) {
    }

    addProduct(name: string) {
        this.store.dispatch(new Add({
            id: Math.random().toString(),
            name: name
        }));
    }
}
