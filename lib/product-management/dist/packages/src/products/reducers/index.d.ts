import { State as RootState } from '@branding/rootstate';
import { State as fromProductState } from './products';
import { Product } from '../models/product';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Dictionary } from '@ngrx/entity/src/models';
export interface ProductsState {
    products: fromProductState;
}
export interface State extends RootState {
    products: ProductsState;
}
export declare const reducers: any;
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export declare const getProductState: MemoizedSelector<any, ProductsState>;
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export declare const getProductEntitiesState: MemoizedSelector<any, fromProductState>;
export declare const getProductIds: (state: any) => string[] | number[], getAllProducts: (state: any) => Product[], getTotalProducts: (state: any) => number;
export declare const getProductEntities: (state: any) => Dictionary<Product>;
