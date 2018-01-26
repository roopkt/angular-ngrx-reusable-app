import { Store } from '@ngrx/store';
import {State} from '../reducers';
import {Add} from '../actions/product';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'rm-release-detail',
    template: `
        <div>
        <pm-release-detail (addProduct)="addProduct($event)"></pm-release-detail>
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
