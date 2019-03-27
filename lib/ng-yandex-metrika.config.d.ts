import { InjectionToken } from '@angular/core';
export declare const DEFAULT_COUNTER_ID_AOT: InjectionToken<string | number>;
export declare const DEFAULT_COUNTER_ID: InjectionToken<string | number>;
export declare const YANDEX_COUNTERS_CONFIGS_AOT: InjectionToken<YandexCounterConfig[]>;
export declare const YANDEX_COUNTERS_CONFIGS: InjectionToken<YandexCounterConfig[]>;
declare type ConfigModifier = (CounterConfig: any) => void;
export interface CounterConfig {
    id: string | number;
    params?: any;
    clickmap?: boolean;
    trackLinks?: boolean;
    accurateTrackBounce?: boolean;
    webvisor?: boolean;
    trackHash?: boolean;
    ut?: string;
    ecommerce?: string;
    triggerEvent?: boolean;
    alternative?: boolean;
    lazyConfigModifier?: ConfigModifier;
}
export declare class YandexCounterConfig implements CounterConfig {
    id: string | number;
    params: any;
    clickmap: boolean;
    trackLinks: boolean;
    accurateTrackBounce: boolean;
    webvisor: boolean;
    trackHash: boolean;
    ut: string;
    ecommerce?: string;
    triggerEvent?: boolean;
    alternative?: boolean;
    lazyConfigModifier?: ConfigModifier;
}
export {};
