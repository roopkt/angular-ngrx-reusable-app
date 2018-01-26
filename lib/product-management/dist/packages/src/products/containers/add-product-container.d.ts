import { Store } from '@ngrx/store';
import { State } from '../reducers';
export declare class AddProductContainerComponent {
    private store;
    constructor(store: Store<State>);
    addProduct(name: string): void;
}
