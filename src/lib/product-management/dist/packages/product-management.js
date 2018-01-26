import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, InjectionToken, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule, createFeatureSelector, createSelector } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { createEntityAdapter } from '@ngrx/entity';
import { RouterModule } from '@angular/router';

const ADD = '[Releases] Add';

/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
const adapter = createEntityAdapter({
    selectId: (product) => product.id,
    sortComparer: false,
});
/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
const initialState = adapter.getInitialState({
    selectedProductId: null,
});
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD: {
            return Object.assign({}, adapter.addOne(action.payload, state), { selectedProductId: state.selectedProductId });
        }
        default: {
            return state;
        }
    }
}

const reducers = {
    products: reducer
};
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getProductState = createFeatureSelector('products');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
const getProductEntitiesState = createSelector(getProductState, state => state.products);
/**
 * Adapters created with \@ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
const entityFns = adapter.getSelectors(getProductEntitiesState);

const ADD$1 = '[Releases] Add';
class Add$1 {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD$1;
    }
}

class AddProductContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store$$1) {
        this.store = store$$1;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    addProduct(name) {
        this.store.dispatch(new Add$1({
            id: Math.random().toString(),
            name: name
        }));
    }
}
AddProductContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'rm-release-detail',
                template: `
        <div>
        <pm-release-detail (addProduct)="addProduct($event)"></pm-release-detail>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductContainerComponent.ctorParameters = () => [
    { type: Store, },
];

class AddProductComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.addProduct = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addProductClick(event) {
        const /** @type {?} */ name = this.el.nativeElement.value;
        this.addProduct.emit(name);
    }
}
AddProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'pm-release-detail',
                template: `
        <div>
        <form (ngSubmit)="addProductClick($event)">
            <p>Product Name:<input type="text" name="prodName" id="prodName"></p>
        </form>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductComponent.ctorParameters = () => [
    { type: ElementRef, },
];
AddProductComponent.propDecorators = {
    'addProduct': [{ type: Output },],
};

const COMPONENTS = [
    AddProductComponent,
    AddProductContainerComponent
];
class ProductsModule {
}
ProductsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    /**
                     * StoreModule.forFeature is used for composing state
                     * from feature modules. These modules can be loaded
                     * eagerly or lazily and will be dynamically added to
                     * the existing state.
                     */
                    StoreModule.forFeature('products', reducers),
                    /**
                     * Effects.forFeature is used to register effects
                     * from feature modules. Effects can be loaded
                     * eagerly or lazily and will be started immediately.
                     *
                     * All Effects will only be instantiated once regardless of
                     * whether they are registered once or multiple times.
                     */
                    EffectsModule.forFeature([]),
                ],
                declarations: COMPONENTS,
                providers: [],
                exports: COMPONENTS
            },] },
];
/**
 * @nocollapse
 */
ProductsModule.ctorParameters = () => [];

class ProductManagementConfig {
}
const PRODUCT_MANAGEMENT_CONFIG = new InjectionToken('@aicpa-projectmanagement/releasemanagement Config');
const INITIAL_OPTIONS = new InjectionToken('@aicpa-projectmanagement/releasemanagement Initial Options');
/**
 * @param {?} _config
 * @return {?}
 */
function createConfig(_config) {
    const /** @type {?} */ DEFAULT_SETTINGS = {
        baseUrl: ''
    };
    const /** @type {?} */ initialSettings = _config;
    const /** @type {?} */ config = Object.assign({}, DEFAULT_SETTINGS, initialSettings);
    if (config.baseUrl == null) {
        throw new Error(`Product Management base url is required, got ${config.baseUrl}`);
    }
    return config;
}

const COMPONENTS$1 = [];
class ProductManagementModule {
    /**
     * @param {?=} settings
     * @return {?}
     */
    static forRoot(settings = {}) {
        return {
            ngModule: ProductManagementModule,
            providers: [
                {
                    provide: INITIAL_OPTIONS,
                    useValue: settings
                },
                {
                    provide: PRODUCT_MANAGEMENT_CONFIG,
                    deps: [INITIAL_OPTIONS],
                    useFactory: createConfig,
                },
            ],
        };
    }
}
ProductManagementModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, ProductsModule],
                declarations: COMPONENTS$1,
                exports: COMPONENTS$1,
            },] },
];
/**
 * @nocollapse
 */
ProductManagementModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ProductsModule, ProductManagementModule, ProductManagementConfig, INITIAL_OPTIONS as ɵc, PRODUCT_MANAGEMENT_CONFIG as ɵb, createConfig as ɵd, COMPONENTS$1 as ɵa, AddProductComponent as ɵf, AddProductContainerComponent as ɵg, reducers as ɵe };
//# sourceMappingURL=product-management.js.map
