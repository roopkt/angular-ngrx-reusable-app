import { InjectionToken } from "@angular/core";
export declare class ProductManagementConfig {
    baseUrl: string;
}
export declare const PRODUCT_MANAGEMENT_CONFIG: InjectionToken<ProductManagementConfig>;
export declare const INITIAL_OPTIONS: InjectionToken<ProductManagementConfig>;
export declare function createConfig(_config: ProductManagementConfig): ProductManagementConfig;
export declare type ProductManagementSettings = Partial<ProductManagementConfig> | (() => Partial<ProductManagementConfig>);
