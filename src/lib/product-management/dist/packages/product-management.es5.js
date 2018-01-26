import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, InjectionToken, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule, createFeatureSelector, createSelector } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { createEntityAdapter } from '@ngrx/entity';
import { RouterModule } from '@angular/router';
var ADD = '[Releases] Add';
/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
var adapter = createEntityAdapter({
    selectId: function (product) { return product.id; },
    sortComparer: false,
});
/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
var initialState = adapter.getInitialState({
    selectedProductId: null,
});
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD: {
            return Object.assign({}, adapter.addOne(action.payload, state), { selectedProductId: state.selectedProductId });
        }
        default: {
            return state;
        }
    }
}
var reducers = {
    products: reducer
};
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
var getProductState = createFeatureSelector('products');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
var getProductEntitiesState = createSelector(getProductState, function (state) { return state.products; });
/**
 * Adapters created with \@ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
var entityFns = adapter.getSelectors(getProductEntitiesState);
var ADD$1 = '[Releases] Add';
var Add$1 = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function Add$1(payload) {
        this.payload = payload;
        this.type = ADD$1;
    }
    return Add$1;
}());
var AddProductContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function AddProductContainerComponent(store$$1) {
        this.store = store$$1;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    AddProductContainerComponent.prototype.addProduct = function (name) {
        this.store.dispatch(new Add$1({
            id: Math.random().toString(),
            name: name
        }));
    };
    return AddProductContainerComponent;
}());
AddProductContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'rm-release-detail',
                template: "\n        <div>\n        <pm-release-detail (addProduct)=\"addProduct($event)\"></pm-release-detail>\n        </div>\n    ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductContainerComponent.ctorParameters = function () { return [
    { type: Store, },
]; };
var AddProductComponent = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function AddProductComponent(el) {
        this.el = el;
        this.addProduct = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AddProductComponent.prototype.addProductClick = function (event) {
        var /** @type {?} */ name = this.el.nativeElement.value;
        this.addProduct.emit(name);
    };
    return AddProductComponent;
}());
AddProductComponent.decorators = [
    { type: Component, args: [{
                selector: 'pm-release-detail',
                template: "\n        <div>\n        <form (ngSubmit)=\"addProductClick($event)\">\n            <p>Product Name:<input type=\"text\" name=\"prodName\" id=\"prodName\"></p>\n        </form>\n        </div>\n    ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
AddProductComponent.propDecorators = {
    'addProduct': [{ type: Output },],
};
var COMPONENTS = [
    AddProductComponent,
    AddProductContainerComponent
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
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
ProductsModule.ctorParameters = function () { return []; };
var ProductManagementConfig = /** @class */ (function () {
    function ProductManagementConfig() {
    }
    return ProductManagementConfig;
}());
var PRODUCT_MANAGEMENT_CONFIG = new InjectionToken('@aicpa-projectmanagement/releasemanagement Config');
var INITIAL_OPTIONS = new InjectionToken('@aicpa-projectmanagement/releasemanagement Initial Options');
/**
 * @param {?} _config
 * @return {?}
 */
function createConfig(_config) {
    var /** @type {?} */ DEFAULT_SETTINGS = {
        baseUrl: ''
    };
    var /** @type {?} */ initialSettings = _config;
    var /** @type {?} */ config = Object.assign({}, DEFAULT_SETTINGS, initialSettings);
    if (config.baseUrl == null) {
        throw new Error("Product Management base url is required, got " + config.baseUrl);
    }
    return config;
}
var COMPONENTS$1 = [];
var ProductManagementModule = /** @class */ (function () {
    function ProductManagementModule() {
    }
    /**
     * @param {?=} settings
     * @return {?}
     */
    ProductManagementModule.forRoot = function (settings) {
        if (settings === void 0) { settings = {}; }
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
    };
    return ProductManagementModule;
}());
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
ProductManagementModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ProductsModule, ProductManagementModule, ProductManagementConfig, INITIAL_OPTIONS as ɵc, PRODUCT_MANAGEMENT_CONFIG as ɵb, createConfig as ɵd, COMPONENTS$1 as ɵa, AddProductComponent as ɵf, AddProductContainerComponent as ɵg, reducers as ɵe };
//# sourceMappingURL=product-management.es5.js.map
