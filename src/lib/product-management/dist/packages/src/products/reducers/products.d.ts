import { EntityAdapter, EntityState } from '@ngrx/entity';
import * as productActions from '../actions/Product';
import { Product } from '../models/product';
export interface State extends EntityState<Product> {
    selectedProductId: string | null;
}
/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export declare const adapter: EntityAdapter<Product>;
/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
*/
export declare const initialState: State;
export declare function reducer(state: State, action: productActions.Actions): State;
export declare const getSelectedId: (state: State) => string;
