import { __awaiter } from 'tslib';
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, Injectable, Injector, APP_INITIALIZER, NgModule, PLATFORM_ID, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_COUNTER_ID_AOT = new InjectionToken('DEFAULT_COUNTER_ID_AOT');
/** @type {?} */
const DEFAULT_COUNTER_ID = new InjectionToken('DEFAULT_COUNTER_ID');
/** @type {?} */
const YANDEX_COUNTERS_CONFIGS_AOT = new InjectionToken('YANDEX_COUNTERS_CONFIGS_AOT');
/** @type {?} */
const YANDEX_COUNTERS_CONFIGS = new InjectionToken('YANDEX_COUNTERS_CONFIGS');
class YandexCounterConfig {
    constructor() {
        this.clickmap = true;
        this.trackLinks = true;
        this.accurateTrackBounce = true;
        this.webvisor = false;
        this.trackHash = true;
        this.ut = 'noindex';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Metrika {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.defaultCounterId = injector.get(DEFAULT_COUNTER_ID);
        this.counterConfigs = injector.get(YANDEX_COUNTERS_CONFIGS);
        this.positionToId = this.counterConfigs.map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    static getCounterNameById(id) {
        return `yaCounter${id}`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    static getCounterById(id) {
        return window[Metrika.getCounterNameById(id)];
    }
    /**
     * @param {?} extensions
     * @param {?=} counterPosition
     * @return {?}
     */
    addFileExtension(extensions, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.addFileExtension(extensions);
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    extLink(url, options = {}, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, url);
                counter.extLink(url, options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    file(url, options = {}, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, url);
                counter.file(url, options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    getClientID(counterPosition) {
        /** @type {?} */
        const counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return counter.getClientID();
        }
        console.warn('Counter is still loading');
    }
    /**
     * @param {?} userId
     * @param {?=} counterPosition
     * @return {?}
     */
    setUserID(userId, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.setUserID(userId);
                return { userId, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    userParams(params, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.userParams(params);
                return { params, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    params(params, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.userParams(params);
                return { params, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    replacePhones(counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.replacePhones();
                return { counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    notBounce(options = {}, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.notBounce(options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} type
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    fireEvent(type, options = {}, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.reachGoal(type, options.params, options.callback, options.ctx);
                return promise;
            }
            catch (error) {
                console.error('error', error);
                console.warn(`'Event with type [${type}] can\'t be fired because counter is still loading'`);
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    hit(url, options = {}, counterPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.hit(url, options);
                return promise;
            }
            catch (error) {
                console.warn(`'Hit for page [${url}] can\'t be fired because counter is still loading'`);
            }
        });
    }
    /**
     * @private
     * @param {?} options
     * @param {?} resolveWith
     * @return {?}
     */
    getCallbackPromise(options, resolveWith) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const optionsCallback = options.callback;
            options.callback = (/**
             * @return {?}
             */
            function () {
                if (optionsCallback) {
                    optionsCallback.call(this);
                }
                resolve(resolveWith);
            });
        }));
    }
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    counterIsLoaded(counterPosition) {
        /** @type {?} */
        const counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return Promise.resolve(counter);
        }
        else {
            return Promise.reject(counter);
        }
    }
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    getCounterByPosition(counterPosition) {
        /** @type {?} */
        const counterId = this.getCounterIdByPosition(counterPosition);
        return Metrika.getCounterById(counterId);
    }
    /**
     * @private
     * @param {?} counterPosition
     * @return {?}
     */
    getCounterIdByPosition(counterPosition) {
        return (counterPosition === undefined)
            ? this.defaultCounterId
            : this.positionToId[counterPosition];
    }
}
Metrika.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Metrika.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ Metrika.ngInjectableDef = defineInjectable({ factory: function Metrika_Factory() { return new Metrika(inject(INJECTOR)); }, token: Metrika, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} counterConfigs
 * @param {?=} defaultCounter
 * @return {?}
 */
function defaultCounterIdFactory(counterConfigs, defaultCounter) {
    return defineDefaultId(counterConfigs, defaultCounter);
}
/**
 * @param {?} counterConfigs
 * @param {?=} defaultCounter
 * @return {?}
 */
function defineDefaultId(counterConfigs, defaultCounter) {
    /** @type {?} */
    let configs;
    if (counterConfigs instanceof Array) {
        configs = counterConfigs;
    }
    else {
        configs = [(/** @type {?} */ (counterConfigs))];
    }
    /** @type {?} */
    let defaultId;
    if (!defaultCounter) {
        defaultId = configs[0].id;
    }
    else if (typeof defaultCounter === 'number' && defaultCounter < configs.length) {
        defaultId = configs[defaultCounter].id;
    }
    else {
        defaultId = defaultCounter;
    }
    if (!defaultId) {
        console.warn('You provided wrong counter id as a default:', defaultCounter);
        return;
    }
    /** @type {?} */
    let defaultCounterExists = false;
    /** @type {?} */
    let config;
    for (let i = 0; i < configs.length; i++) {
        config = configs[i];
        if (!config.id) {
            console.warn('You should provide counter id to use Yandex metrika counter', config);
            continue;
        }
        if (config.id === defaultId) {
            defaultCounterExists = true;
        }
    }
    if (!defaultCounterExists) {
        console.warn('You provided wrong counter id as a default:', defaultCounter);
    }
    return defaultId;
}
/**
 * @param {?} configs
 * @return {?}
 */
function countersFactory(configs) {
    return createConfigs(configs);
}
/**
 * @param {?} configs
 * @return {?}
 */
function createConfigs(configs) {
    /** @type {?} */
    let counterConfigs;
    if (configs instanceof Array) {
        counterConfigs = configs;
    }
    else {
        counterConfigs = [(/** @type {?} */ (configs))];
    }
    return counterConfigs.map((/**
     * @param {?} config
     * @return {?}
     */
    (config) => Object.assign(new YandexCounterConfig(), config)));
}
/**
 * @param {?} counterConfigs
 * @param {?} platformId
 * @return {?}
 */
function appInitializerFactory(counterConfigs, platformId) {
    if (!isPlatformBrowser(platformId)) {
        return (/**
         * @return {?}
         */
        () => 'none');
    }
    counterConfigs.forEach((/**
     * @param {?} counterConfig
     * @return {?}
     */
    counterConfig => {
        if (counterConfig.lazyConfigModifier !== undefined) {
            counterConfig.lazyConfigModifier(counterConfig);
        }
    }));
    return insertMetrika.bind(null, counterConfigs);
}
/**
 * @param {?} counterConfigs
 * @return {?}
 */
function insertMetrika(counterConfigs) {
    /** @type {?} */
    const name = 'yandex_metrika_callbacks2';
    window[name] = window[name] || [];
    window[name].push((/**
     * @return {?}
     */
    () => {
        try {
            for (const config of counterConfigs) {
                createCounter(config);
            }
        }
        catch (e) { }
    }));
    /** @type {?} */
    const n = document.getElementsByTagName('script')[0];
    /** @type {?} */
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    /** @type {?} */
    const alternative = counterConfigs.find((/**
     * @param {?} config
     * @return {?}
     */
    config => config.alternative));
    if (alternative) {
        s.src = 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js';
    }
    else {
        s.src = 'https://mc.yandex.ru/metrika/tag.js';
    }
    /** @type {?} */
    const insetScriptTag = (/**
     * @return {?}
     */
    () => n.parentNode.insertBefore(s, n));
    if (((/** @type {?} */ (window))).opera === '[object Opera]') {
        document.addEventListener('DOMContentLoaded', insetScriptTag, false);
    }
    else {
        insetScriptTag();
    }
    return name;
}
/**
 * @param {?} config
 * @return {?}
 */
function createCounter(config) {
    window[getCounterNameById(config.id)] = new Ya.Metrika2(config);
}
/**
 * @param {?} id
 * @return {?}
 */
function getCounterNameById(id) {
    return `yaCounter${id}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetrikaModule {
    /**
     * @param {?} configs
     * @param {?=} defaultCounterId
     * @return {?}
     */
    static forRoot(configs, defaultCounterId) {
        return {
            ngModule: MetrikaModule,
            providers: [
                {
                    provide: DEFAULT_COUNTER_ID_AOT,
                    useValue: defaultCounterId,
                },
                {
                    provide: YANDEX_COUNTERS_CONFIGS_AOT,
                    useValue: configs,
                },
                {
                    provide: DEFAULT_COUNTER_ID,
                    useFactory: defaultCounterIdFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS_AOT, DEFAULT_COUNTER_ID_AOT],
                },
                {
                    provide: YANDEX_COUNTERS_CONFIGS,
                    useFactory: countersFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS_AOT],
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitializerFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS, PLATFORM_ID],
                    multi: true,
                },
                {
                    provide: Metrika,
                    useClass: Metrika,
                    deps: [Injector, PLATFORM_ID],
                }
            ],
        };
    }
}
MetrikaModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Metrika, defaultCounterIdFactory, defineDefaultId, countersFactory, createConfigs, appInitializerFactory, insertMetrika, createCounter, getCounterNameById, MetrikaModule, DEFAULT_COUNTER_ID as ɵb, DEFAULT_COUNTER_ID_AOT as ɵa, YANDEX_COUNTERS_CONFIGS as ɵd, YANDEX_COUNTERS_CONFIGS_AOT as ɵc };

//# sourceMappingURL=ng-yandex-metrika.js.map