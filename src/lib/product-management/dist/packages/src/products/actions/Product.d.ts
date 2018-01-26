import { Action } from '@ngrx/store';
import { Product } from '../models/product';
export declare const ADD = "[Releases] Add";
export declare class Add implements Action {
    payload: Product;
    readonly type: string;
    constructor(payload: Product);
}
export declare type Actions = Add;
