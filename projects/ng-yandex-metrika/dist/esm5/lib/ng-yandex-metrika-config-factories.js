/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { YandexCounterConfig } from './ng-yandex-metrika.config';
/**
 * @param {?} counterConfigs
 * @param {?=} defaultCounter
 * @return {?}
 */
export function defaultCounterIdFactory(counterConfigs, defaultCounter) {
    return defineDefaultId(counterConfigs, defaultCounter);
}
/**
 * @param {?} counterConfigs
 * @param {?=} defaultCounter
 * @return {?}
 */
export function defineDefaultId(counterConfigs, defaultCounter) {
    /** @type {?} */
    var configs;
    if (counterConfigs instanceof Array) {
        configs = counterConfigs;
    }
    else {
        configs = [(/** @type {?} */ (counterConfigs))];
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
export function countersFactory(configs) {
    return createConfigs(configs);
}
/**
 * @param {?} configs
 * @return {?}
 */
export function createConfigs(configs) {
    /** @type {?} */
    var counterConfigs;
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
    function (config) { return Object.assign(new YandexCounterConfig(), config); }));
}
/**
 * @param {?} counterConfigs
 * @param {?} platformId
 * @return {?}
 */
export function appInitializerFactory(counterConfigs, platformId) {
    if (!isPlatformBrowser(platformId)) {
        return (/**
         * @return {?}
         */
        function () { return 'none'; });
    }
    counterConfigs.forEach((/**
     * @param {?} counterConfig
     * @return {?}
     */
    function (counterConfig) {
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
export function insertMetrika(counterConfigs) {
    /** @type {?} */
    var name = 'yandex_metrika_callbacks2';
    window[name] = window[name] || [];
    window[name].push((/**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            try {
                for (var counterConfigs_1 = tslib_1.__values(counterConfigs), counterConfigs_1_1 = counterConfigs_1.next(); !counterConfigs_1_1.done; counterConfigs_1_1 = counterConfigs_1.next()) {
                    var config = counterConfigs_1_1.value;
                    createCounter(config);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (counterConfigs_1_1 && !counterConfigs_1_1.done && (_a = counterConfigs_1.return)) _a.call(counterConfigs_1);
                }
                finally { if (e_1) throw e_1.error; }
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
    var alternative = counterConfigs.find((/**
     * @param {?} config
     * @return {?}
     */
    function (config) { return config.alternative; }));
    if (alternative) {
        s.src = 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js';
    }
    else {
        s.src = 'https://mc.yandex.ru/metrika/tag.js';
    }
    /** @type {?} */
    var insetScriptTag = (/**
     * @return {?}
     */
    function () { return n.parentNode.insertBefore(s, n); });
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
export function createCounter(config) {
    window[getCounterNameById(config.id)] = new Ya.Metrika2(config);
}
/**
 * @param {?} id
 * @return {?}
 */
export function getCounterNameById(id) {
    return "yaCounter" + id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcteWFuZGV4LW1ldHJpa2EtY29uZmlnLWZhY3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXlhbmRleC1tZXRyaWthLyIsInNvdXJjZXMiOlsibGliL25nLXlhbmRleC1tZXRyaWthLWNvbmZpZy1mYWN0b3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFdEUsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFFaEYsTUFBTSxVQUFVLHVCQUF1QixDQUFDLGNBQStDLEVBQUUsY0FBZ0M7SUFDdkgsT0FBTyxlQUFlLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsY0FBK0MsRUFBRSxjQUFnQzs7UUFDM0csT0FBd0I7SUFDNUIsSUFBSSxjQUFjLFlBQVksS0FBSyxFQUFFO1FBQ25DLE9BQU8sR0FBRyxjQUFjLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDLG1CQUFBLGNBQWMsRUFBaUIsQ0FBQyxDQUFDO0tBQzdDOztRQUNHLFNBQTBCO0lBRTlCLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDM0I7U0FBTSxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNoRixTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN4QztTQUFNO1FBQ0wsU0FBUyxHQUFHLGNBQWMsQ0FBQztLQUM1QjtJQUVELElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzVFLE9B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T0FBQSxNQUFNLENBQUMsV0FBVyxFQUFsQixDQUFrQixFQUFDO0lBRXJFLElBQUksV0FBVyxFQUFFO1FBQ2YsQ0FBQyxDQUFDLEdBQUcsR0FBRywwREFBMEQsQ0FBQztLQUNwRTtTQUFNO1FBQ0wsQ0FBQyxDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztLQUMvQzs7UUFFSyxjQUFjOzs7SUFBRyxjQUFNLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUEvQixDQUErQixDQUFBO0lBRTVELElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsRUFBRTtRQUM5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3RFO1NBQU07UUFDTCxjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQTJCO0lBQ3ZELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsRUFBbUI7SUFDcEQsT0FBTyxjQUFZLEVBQUksQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgWWE6IGFueTtcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3VudGVyQ29uZmlnLCBZYW5kZXhDb3VudGVyQ29uZmlnIH0gZnJvbSAnLi9uZy15YW5kZXgtbWV0cmlrYS5jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdENvdW50ZXJJZEZhY3RvcnkoY291bnRlckNvbmZpZ3M6IENvdW50ZXJDb25maWcgfCBDb3VudGVyQ29uZmlnW10sIGRlZmF1bHRDb3VudGVyPzogbnVtYmVyIHwgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVEZWZhdWx0SWQoY291bnRlckNvbmZpZ3MsIGRlZmF1bHRDb3VudGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZURlZmF1bHRJZChjb3VudGVyQ29uZmlnczogQ291bnRlckNvbmZpZyB8IENvdW50ZXJDb25maWdbXSwgZGVmYXVsdENvdW50ZXI/OiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgbGV0IGNvbmZpZ3M6IENvdW50ZXJDb25maWdbXTtcbiAgaWYgKGNvdW50ZXJDb25maWdzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25maWdzID0gY291bnRlckNvbmZpZ3M7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlncyA9IFtjb3VudGVyQ29uZmlncyBhcyBDb3VudGVyQ29uZmlnXTtcbiAgfVxuICBsZXQgZGVmYXVsdElkOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgaWYgKCFkZWZhdWx0Q291bnRlcikge1xuICAgIGRlZmF1bHRJZCA9IGNvbmZpZ3NbMF0uaWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmF1bHRDb3VudGVyID09PSAnbnVtYmVyJyAmJiBkZWZhdWx0Q291bnRlciA8IGNvbmZpZ3MubGVuZ3RoKSB7XG4gICAgZGVmYXVsdElkID0gY29uZmlnc1tkZWZhdWx0Q291bnRlcl0uaWQ7XG4gIH0gZWxzZSB7XG4gICAgZGVmYXVsdElkID0gZGVmYXVsdENvdW50ZXI7XG4gIH1cblxuICBpZiAoIWRlZmF1bHRJZCkge1xuICAgIGNvbnNvbGUud2FybignWW91IHByb3ZpZGVkIHdyb25nIGNvdW50ZXIgaWQgYXMgYSBkZWZhdWx0OicsIGRlZmF1bHRDb3VudGVyKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZGVmYXVsdENvdW50ZXJFeGlzdHMgPSBmYWxzZTtcbiAgbGV0IGNvbmZpZztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uZmlnID0gY29uZmlnc1tpXTtcbiAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3Ugc2hvdWxkIHByb3ZpZGUgY291bnRlciBpZCB0byB1c2UgWWFuZGV4IG1ldHJpa2EgY291bnRlcicsIGNvbmZpZyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pZCA9PT0gZGVmYXVsdElkKSB7XG4gICAgICBkZWZhdWx0Q291bnRlckV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFkZWZhdWx0Q291bnRlckV4aXN0cykge1xuICAgIGNvbnNvbGUud2FybignWW91IHByb3ZpZGVkIHdyb25nIGNvdW50ZXIgaWQgYXMgYSBkZWZhdWx0OicsIGRlZmF1bHRDb3VudGVyKTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRlcnNGYWN0b3J5KGNvbmZpZ3M6IENvdW50ZXJDb25maWcgfCBDb3VudGVyQ29uZmlnW10pIHtcbiAgcmV0dXJuIGNyZWF0ZUNvbmZpZ3MoY29uZmlncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25maWdzKGNvbmZpZ3M6IENvdW50ZXJDb25maWcgfCBDb3VudGVyQ29uZmlnW10pIHtcbiAgbGV0IGNvdW50ZXJDb25maWdzOiBDb3VudGVyQ29uZmlnW107XG4gIGlmIChjb25maWdzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb3VudGVyQ29uZmlncyA9IGNvbmZpZ3M7XG4gIH0gZWxzZSB7XG4gICAgY291bnRlckNvbmZpZ3MgPSBbY29uZmlncyBhcyBDb3VudGVyQ29uZmlnXTtcbiAgfVxuICByZXR1cm4gY291bnRlckNvbmZpZ3MubWFwKChjb25maWc6IENvdW50ZXJDb25maWcpID0+IE9iamVjdC5hc3NpZ24obmV3IFlhbmRleENvdW50ZXJDb25maWcoKSwgY29uZmlnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBJbml0aWFsaXplckZhY3RvcnkoY291bnRlckNvbmZpZ3M6IFlhbmRleENvdW50ZXJDb25maWdbXSwgcGxhdGZvcm1JZDogYW55KSB7XG4gIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICByZXR1cm4gKCkgPT4gJ25vbmUnO1xuICB9XG4gIGNvdW50ZXJDb25maWdzLmZvckVhY2goY291bnRlckNvbmZpZyA9PiB7XG4gICAgaWYgKGNvdW50ZXJDb25maWcubGF6eUNvbmZpZ01vZGlmaWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvdW50ZXJDb25maWcubGF6eUNvbmZpZ01vZGlmaWVyKGNvdW50ZXJDb25maWcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpbnNlcnRNZXRyaWthLmJpbmQobnVsbCwgY291bnRlckNvbmZpZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0TWV0cmlrYShjb3VudGVyQ29uZmlnczogWWFuZGV4Q291bnRlckNvbmZpZ1tdKSB7XG4gIGNvbnN0IG5hbWUgPSAneWFuZGV4X21ldHJpa2FfY2FsbGJhY2tzMic7XG4gIHdpbmRvd1tuYW1lXSA9IHdpbmRvd1tuYW1lXSB8fCBbXTtcbiAgd2luZG93W25hbWVdLnB1c2goKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBjb3VudGVyQ29uZmlncykge1xuICAgICAgICBjcmVhdGVDb3VudGVyKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSk7XG5cbiAgY29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgcy5hc3luYyA9IHRydWU7XG5cbiAgY29uc3QgYWx0ZXJuYXRpdmUgPSBjb3VudGVyQ29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcuYWx0ZXJuYXRpdmUpO1xuXG4gIGlmIChhbHRlcm5hdGl2ZSkge1xuICAgIHMuc3JjID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veWFuZGV4LW1ldHJpY2Etd2F0Y2gvdGFnLmpzJztcbiAgfSBlbHNlIHtcbiAgICBzLnNyYyA9ICdodHRwczovL21jLnlhbmRleC5ydS9tZXRyaWthL3RhZy5qcyc7XG4gIH1cblxuICBjb25zdCBpbnNldFNjcmlwdFRhZyA9ICgpID0+IG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgbik7XG5cbiAgaWYgKCh3aW5kb3cgYXMgYW55KS5vcGVyYSA9PT0gJ1tvYmplY3QgT3BlcmFdJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbnNldFNjcmlwdFRhZywgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGluc2V0U2NyaXB0VGFnKCk7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3VudGVyKGNvbmZpZzogWWFuZGV4Q291bnRlckNvbmZpZykge1xuICB3aW5kb3dbZ2V0Q291bnRlck5hbWVCeUlkKGNvbmZpZy5pZCldID0gbmV3IFlhLk1ldHJpa2EyKGNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudGVyTmFtZUJ5SWQoaWQ6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gYHlhQ291bnRlciR7aWR9YDtcbn1cbiJdfQ==