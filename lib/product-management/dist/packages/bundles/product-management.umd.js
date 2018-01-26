(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngrx/store'), require('@ngrx/effects'), require('@ngrx/entity'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@ngrx/store', '@ngrx/effects', '@ngrx/entity', '@angular/router'], factory) :
	(factory((global['product-management'] = {}),global.ng.core,global.ng.common,global['@ngrx/store'],global['@ngrx/effects'],global['@ngrx/entity'],global.ng.router));
}(this, (function (exports,core,common,store,effects,entity,router) { 'use strict';

var ADD = '[Releases] Add';
/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
var adapter = entity.createEntityAdapter({
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
var getProductState = store.createFeatureSelector('products');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
var getProductEntitiesState = store.createSelector(getProductState, function (state) { return state.products; });
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
    { type: core.Component, args: [{
                selector: 'pm-add-product-container',
                template: "\n        <div>\n        <pm-add-product (addProduct)=\"addProduct($event)\"></pm-add-product>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductContainerComponent.ctorParameters = function () { return [
    { type: store.Store, },
]; };
var AddProductComponent = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function AddProductComponent(el) {
        this.el = el;
        this.addProduct = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'pm-add-product',
                template: "\n        <div>\n        <form (ngSubmit)=\"addProductClick($event)\">\n            <p>Product Name:<input type=\"text\" name=\"prodName\" id=\"prodName\"></p>\n        </form>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
AddProductComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
AddProductComponent.propDecorators = {
    'addProduct': [{ type: core.Output },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    /**
                     * StoreModule.forFeature is used for composing state
                     * from feature modules. These modules can be loaded
                     * eagerly or lazily and will be dynamically added to
                     * the existing state.
                     */
                    store.StoreModule.forFeature('products', reducers),
                    /**
                     * Effects.forFeature is used to register effects
                     * from feature modules. Effects can be loaded
                     * eagerly or lazily and will be started immediately.
                     *
                     * All Effects will only be instantiated once regardless of
                     * whether they are registered once or multiple times.
                     */
                    effects.EffectsModule.forFeature([]),
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
var PRODUCT_MANAGEMENT_CONFIG = new core.InjectionToken('@aicpa-projectmanagement/releasemanagement Config');
var INITIAL_OPTIONS = new core.InjectionToken('@aicpa-projectmanagement/releasemanagement Initial Options');
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    ProductsModule,
                    router.RouterModule.forChild([
                        { path: '', component: AddProductContainerComponent },
                    ])
                ],
                declarations: COMPONENTS$1,
                exports: COMPONENTS$1,
            },] },
];
/**
 * @nocollapse
 */
ProductManagementModule.ctorParameters = function () { return []; };

exports.ProductsModule = ProductsModule;
exports.ProductManagementModule = ProductManagementModule;
exports.ProductManagementConfig = ProductManagementConfig;
exports.ɵc = INITIAL_OPTIONS;
exports.ɵb = PRODUCT_MANAGEMENT_CONFIG;
exports.ɵd = createConfig;
exports.ɵa = COMPONENTS$1;
exports.ɵf = AddProductComponent;
exports.ɵg = AddProductContainerComponent;
exports.ɵe = reducers;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=product-management.umd.js.map
