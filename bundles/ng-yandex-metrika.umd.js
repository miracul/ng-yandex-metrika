(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-yandex-metrika', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ng-yandex-metrika'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_COUNTER_ID_AOT = new i0.InjectionToken('DEFAULT_COUNTER_ID_AOT');
    /** @type {?} */
    var DEFAULT_COUNTER_ID = new i0.InjectionToken('DEFAULT_COUNTER_ID');
    /** @type {?} */
    var YANDEX_COUNTERS_CONFIGS_AOT = new i0.InjectionToken('YANDEX_COUNTERS_CONFIGS_AOT');
    /** @type {?} */
    var YANDEX_COUNTERS_CONFIGS = new i0.InjectionToken('YANDEX_COUNTERS_CONFIGS');
    var YandexCounterConfig = /** @class */ (function () {
        function YandexCounterConfig() {
            this.clickmap = true;
            this.trackLinks = true;
            this.accurateTrackBounce = true;
            this.webvisor = false;
            this.trackHash = true;
            this.ut = 'noindex';
        }
        return YandexCounterConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Metrika = /** @class */ (function () {
        function Metrika(injector) {
            this.defaultCounterId = injector.get(DEFAULT_COUNTER_ID);
            this.counterConfigs = injector.get(YANDEX_COUNTERS_CONFIGS);
            this.positionToId = this.counterConfigs.map(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return config.id; }));
        }
        /**
         * @param {?} id
         * @return {?}
         */
        Metrika.getCounterNameById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return "yaCounter" + id;
            };
        /**
         * @param {?} id
         * @return {?}
         */
        Metrika.getCounterById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return window[Metrika.getCounterNameById(id)];
            };
        /**
         * @param {?} extensions
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.addFileExtension = /**
         * @param {?} extensions
         * @param {?=} counterPosition
         * @return {?}
         */
            function (extensions, counterPosition) {
                return __awaiter(this, void 0, void 0, function () {
                    var counter, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                counter.addFileExtension(extensions);
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.extLink = /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
            function (url, options, counterPosition) {
                if (options === void 0) {
                    options = {};
                }
                return __awaiter(this, void 0, void 0, function () {
                    var counter, promise, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                promise = this.getCallbackPromise(options, url);
                                counter.extLink(url, options);
                                return [2 /*return*/, promise];
                            case 2:
                                error_2 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.file = /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
            function (url, options, counterPosition) {
                if (options === void 0) {
                    options = {};
                }
                return __awaiter(this, void 0, void 0, function () {
                    var counter, promise, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                promise = this.getCallbackPromise(options, url);
                                counter.file(url, options);
                                return [2 /*return*/, promise];
                            case 2:
                                error_3 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.getClientID = /**
         * @param {?=} counterPosition
         * @return {?}
         */
            function (counterPosition) {
                /** @type {?} */
                var counter = this.getCounterByPosition(counterPosition);
                if (counter && counter.reachGoal) {
                    return counter.getClientID();
                }
                console.warn('Counter is still loading');
            };
        /**
         * @param {?} userId
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.setUserID = /**
         * @param {?} userId
         * @param {?=} counterPosition
         * @return {?}
         */
            function (userId, counterPosition) {
                return __awaiter(this, void 0, void 0, function () {
                    var counter, error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                counter.setUserID(userId);
                                return [2 /*return*/, { userId: userId, counterPosition: counterPosition }];
                            case 2:
                                error_4 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} params
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.userParams = /**
         * @param {?} params
         * @param {?=} counterPosition
         * @return {?}
         */
            function (params, counterPosition) {
                return __awaiter(this, void 0, void 0, function () {
                    var counter, error_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                counter.userParams(params);
                                return [2 /*return*/, { params: params, counterPosition: counterPosition }];
                            case 2:
                                error_5 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} params
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.params = /**
         * @param {?} params
         * @param {?=} counterPosition
         * @return {?}
         */
            function (params, counterPosition) {
                return __awaiter(this, void 0, void 0, function () {
                    var counter, error_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                counter.userParams(params);
                                return [2 /*return*/, { params: params, counterPosition: counterPosition }];
                            case 2:
                                error_6 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.replacePhones = /**
         * @param {?=} counterPosition
         * @return {?}
         */
            function (counterPosition) {
                return __awaiter(this, void 0, void 0, function () {
                    var counter, error_7;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                counter.replacePhones();
                                return [2 /*return*/, { counterPosition: counterPosition }];
                            case 2:
                                error_7 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.notBounce = /**
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
            function (options, counterPosition) {
                if (options === void 0) {
                    options = {};
                }
                return __awaiter(this, void 0, void 0, function () {
                    var counter, promise, error_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                promise = this.getCallbackPromise(options, options);
                                counter.notBounce(options);
                                return [2 /*return*/, promise];
                            case 2:
                                error_8 = _a.sent();
                                console.warn('Counter is still loading');
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} type
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.fireEvent = /**
         * @param {?} type
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
            function (type, options, counterPosition) {
                if (options === void 0) {
                    options = {};
                }
                return __awaiter(this, void 0, void 0, function () {
                    var counter, promise, error_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                promise = this.getCallbackPromise(options, options);
                                counter.reachGoal(type, options.params, options.callback, options.ctx);
                                return [2 /*return*/, promise];
                            case 2:
                                error_9 = _a.sent();
                                console.error('error', error_9);
                                console.warn("'Event with type [" + type + "] can't be fired because counter is still loading'");
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.hit = /**
         * @param {?} url
         * @param {?=} options
         * @param {?=} counterPosition
         * @return {?}
         */
            function (url, options, counterPosition) {
                if (options === void 0) {
                    options = {};
                }
                return __awaiter(this, void 0, void 0, function () {
                    var counter, promise, error_10;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                            case 1:
                                counter = _a.sent();
                                promise = this.getCallbackPromise(options, options);
                                counter.hit(url, options);
                                return [2 /*return*/, promise];
                            case 2:
                                error_10 = _a.sent();
                                console.warn("'Hit for page [" + url + "] can't be fired because counter is still loading'");
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} options
         * @param {?} resolveWith
         * @return {?}
         */
        Metrika.prototype.getCallbackPromise = /**
         * @private
         * @param {?} options
         * @param {?} resolveWith
         * @return {?}
         */
            function (options, resolveWith) {
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    /** @type {?} */
                    var optionsCallback = options.callback;
                    options.callback = ( /**
                     * @return {?}
                     */function () {
                        if (optionsCallback) {
                            optionsCallback.call(this);
                        }
                        resolve(resolveWith);
                    });
                }));
            };
        /**
         * @private
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.counterIsLoaded = /**
         * @private
         * @param {?=} counterPosition
         * @return {?}
         */
            function (counterPosition) {
                /** @type {?} */
                var counter = this.getCounterByPosition(counterPosition);
                if (counter && counter.reachGoal) {
                    return Promise.resolve(counter);
                }
                else {
                    return Promise.reject(counter);
                }
            };
        /**
         * @private
         * @param {?=} counterPosition
         * @return {?}
         */
        Metrika.prototype.getCounterByPosition = /**
         * @private
         * @param {?=} counterPosition
         * @return {?}
         */
            function (counterPosition) {
                /** @type {?} */
                var counterId = this.getCounterIdByPosition(counterPosition);
                return Metrika.getCounterById(counterId);
            };
        /**
         * @private
         * @param {?} counterPosition
         * @return {?}
         */
        Metrika.prototype.getCounterIdByPosition = /**
         * @private
         * @param {?} counterPosition
         * @return {?}
         */
            function (counterPosition) {
                return (counterPosition === undefined)
                    ? this.defaultCounterId
                    : this.positionToId[counterPosition];
            };
        Metrika.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Metrika.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ Metrika.ngInjectableDef = i0.defineInjectable({ factory: function Metrika_Factory() { return new Metrika(i0.inject(i0.INJECTOR)); }, token: Metrika, providedIn: "root" });
        return Metrika;
    }());

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
        var configs;
        if (counterConfigs instanceof Array) {
            configs = counterConfigs;
        }
        else {
            configs = [( /** @type {?} */(counterConfigs))];
        }
        /** @type {?} */
        var defaultId;
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
        var defaultCounterExists = false;
        /** @type {?} */
        var config;
        for (var i = 0; i < configs.length; i++) {
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
        var counterConfigs;
        if (configs instanceof Array) {
            counterConfigs = configs;
        }
        else {
            counterConfigs = [( /** @type {?} */(configs))];
        }
        return counterConfigs.map(( /**
         * @param {?} config
         * @return {?}
         */function (config) { return Object.assign(new YandexCounterConfig(), config); }));
    }
    /**
     * @param {?} counterConfigs
     * @param {?} platformId
     * @return {?}
     */
    function appInitializerFactory(counterConfigs, platformId) {
        if (!common.isPlatformBrowser(platformId)) {
            return ( /**
             * @return {?}
             */function () { return 'none'; });
        }
        counterConfigs.forEach(( /**
         * @param {?} counterConfig
         * @return {?}
         */function (counterConfig) {
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
        var name = 'yandex_metrika_callbacks2';
        window[name] = window[name] || [];
        window[name].push(( /**
         * @return {?}
         */function () {
            var e_1, _a;
            try {
                try {
                    for (var counterConfigs_1 = __values(counterConfigs), counterConfigs_1_1 = counterConfigs_1.next(); !counterConfigs_1_1.done; counterConfigs_1_1 = counterConfigs_1.next()) {
                        var config = counterConfigs_1_1.value;
                        createCounter(config);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (counterConfigs_1_1 && !counterConfigs_1_1.done && (_a = counterConfigs_1.return))
                            _a.call(counterConfigs_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            }
            catch (e) { }
        }));
        /** @type {?} */
        var n = document.getElementsByTagName('script')[0];
        /** @type {?} */
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        /** @type {?} */
        var alternative = counterConfigs.find(( /**
         * @param {?} config
         * @return {?}
         */function (config) { return config.alternative; }));
        if (alternative) {
            s.src = 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js';
        }
        else {
            s.src = 'https://mc.yandex.ru/metrika/tag.js';
        }
        /** @type {?} */
        var insetScriptTag = ( /**
         * @return {?}
         */function () { return n.parentNode.insertBefore(s, n); });
        if ((( /** @type {?} */(window))).opera === '[object Opera]') {
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
        return "yaCounter" + id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetrikaModule = /** @class */ (function () {
        function MetrikaModule() {
        }
        /**
         * @param {?} configs
         * @param {?=} defaultCounterId
         * @return {?}
         */
        MetrikaModule.forRoot = /**
         * @param {?} configs
         * @param {?=} defaultCounterId
         * @return {?}
         */
            function (configs, defaultCounterId) {
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
                            provide: i0.APP_INITIALIZER,
                            useFactory: appInitializerFactory,
                            deps: [YANDEX_COUNTERS_CONFIGS, i0.PLATFORM_ID],
                            multi: true,
                        },
                        {
                            provide: Metrika,
                            useClass: Metrika,
                            deps: [i0.Injector, i0.PLATFORM_ID],
                        }
                    ],
                };
            };
        MetrikaModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return MetrikaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Metrika = Metrika;
    exports.defaultCounterIdFactory = defaultCounterIdFactory;
    exports.defineDefaultId = defineDefaultId;
    exports.countersFactory = countersFactory;
    exports.createConfigs = createConfigs;
    exports.appInitializerFactory = appInitializerFactory;
    exports.insertMetrika = insertMetrika;
    exports.createCounter = createCounter;
    exports.getCounterNameById = getCounterNameById;
    exports.MetrikaModule = MetrikaModule;
    exports.ɵb = DEFAULT_COUNTER_ID;
    exports.ɵa = DEFAULT_COUNTER_ID_AOT;
    exports.ɵd = YANDEX_COUNTERS_CONFIGS;
    exports.ɵc = YANDEX_COUNTERS_CONFIGS_AOT;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-yandex-metrika.umd.js.map