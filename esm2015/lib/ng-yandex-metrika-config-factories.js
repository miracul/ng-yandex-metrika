/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function countersFactory(configs) {
    return createConfigs(configs);
}
/**
 * @param {?} configs
 * @return {?}
 */
export function createConfigs(configs) {
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
export function appInitializerFactory(counterConfigs, platformId) {
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
export function insertMetrika(counterConfigs) {
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
export function createCounter(config) {
    window[getCounterNameById(config.id)] = new Ya.Metrika2(config);
}
/**
 * @param {?} id
 * @return {?}
 */
export function getCounterNameById(id) {
    return `yaCounter${id}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcteWFuZGV4LW1ldHJpa2EtY29uZmlnLWZhY3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXlhbmRleC1tZXRyaWthLyIsInNvdXJjZXMiOlsibGliL25nLXlhbmRleC1tZXRyaWthLWNvbmZpZy1mYWN0b3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQWlCLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUVoRixNQUFNLFVBQVUsdUJBQXVCLENBQUMsY0FBK0MsRUFBRSxjQUFnQztJQUN2SCxPQUFPLGVBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxjQUErQyxFQUFFLGNBQWdDOztRQUMzRyxPQUF3QjtJQUM1QixJQUFJLGNBQWMsWUFBWSxLQUFLLEVBQUU7UUFDbkMsT0FBTyxHQUFHLGNBQWMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUMsbUJBQUEsY0FBYyxFQUFpQixDQUFDLENBQUM7S0FDN0M7O1FBQ0csU0FBMEI7SUFFOUIsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNuQixTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMzQjtTQUFNLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ2hGLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3hDO1NBQU07UUFDTCxTQUFTLEdBQUcsY0FBYyxDQUFDO0tBQzVCO0lBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDNUUsT0FBTztLQUNSOztRQUVHLG9CQUFvQixHQUFHLEtBQUs7O1FBQzVCLE1BQU07SUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyw2REFBNkQsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRixTQUFTO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzNCLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUM3QjtLQUNGO0lBRUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDN0U7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBd0M7SUFDdEUsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLE9BQXdDOztRQUNoRSxjQUErQjtJQUNuQyxJQUFJLE9BQU8sWUFBWSxLQUFLLEVBQUU7UUFDNUIsY0FBYyxHQUFHLE9BQU8sQ0FBQztLQUMxQjtTQUFNO1FBQ0wsY0FBYyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUFpQixDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLGNBQWMsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksbUJBQW1CLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBQyxDQUFDO0FBQ3pHLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxjQUFxQyxFQUFFLFVBQWU7SUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2xDOzs7UUFBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUM7S0FDckI7SUFDRCxjQUFjLENBQUMsT0FBTzs7OztJQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3JDLElBQUksYUFBYSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNsRCxhQUFhLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDbEQsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLGNBQXFDOztVQUMzRCxJQUFJLEdBQUcsMkJBQTJCO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7SUFBQyxHQUFHLEVBQUU7UUFDckIsSUFBSTtZQUNGLEtBQUssTUFBTSxNQUFNLElBQUksY0FBYyxFQUFFO2dCQUNuQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkI7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQyxFQUFDLENBQUM7O1VBRUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBQzlDLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0lBQzNCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztVQUVULFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztJQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBQztJQUVyRSxJQUFJLFdBQVcsRUFBRTtRQUNmLENBQUMsQ0FBQyxHQUFHLEdBQUcsMERBQTBELENBQUM7S0FDcEU7U0FBTTtRQUNMLENBQUMsQ0FBQyxHQUFHLEdBQUcscUNBQXFDLENBQUM7S0FDL0M7O1VBRUssY0FBYzs7O0lBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRTVELElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsRUFBRTtRQUM5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3RFO1NBQU07UUFDTCxjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQTJCO0lBQ3ZELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsRUFBbUI7SUFDcEQsT0FBTyxZQUFZLEVBQUUsRUFBRSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBZYTogYW55O1xuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvdW50ZXJDb25maWcsIFlhbmRleENvdW50ZXJDb25maWcgfSBmcm9tICcuL25nLXlhbmRleC1tZXRyaWthLmNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Q291bnRlcklkRmFjdG9yeShjb3VudGVyQ29uZmlnczogQ291bnRlckNvbmZpZyB8IENvdW50ZXJDb25maWdbXSwgZGVmYXVsdENvdW50ZXI/OiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZURlZmF1bHRJZChjb3VudGVyQ29uZmlncywgZGVmYXVsdENvdW50ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lRGVmYXVsdElkKGNvdW50ZXJDb25maWdzOiBDb3VudGVyQ29uZmlnIHwgQ291bnRlckNvbmZpZ1tdLCBkZWZhdWx0Q291bnRlcj86IG51bWJlciB8IHN0cmluZykge1xuICBsZXQgY29uZmlnczogQ291bnRlckNvbmZpZ1tdO1xuICBpZiAoY291bnRlckNvbmZpZ3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNvbmZpZ3MgPSBjb3VudGVyQ29uZmlncztcbiAgfSBlbHNlIHtcbiAgICBjb25maWdzID0gW2NvdW50ZXJDb25maWdzIGFzIENvdW50ZXJDb25maWddO1xuICB9XG4gIGxldCBkZWZhdWx0SWQ6IG51bWJlciB8IHN0cmluZztcblxuICBpZiAoIWRlZmF1bHRDb3VudGVyKSB7XG4gICAgZGVmYXVsdElkID0gY29uZmlnc1swXS5pZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmYXVsdENvdW50ZXIgPT09ICdudW1iZXInICYmIGRlZmF1bHRDb3VudGVyIDwgY29uZmlncy5sZW5ndGgpIHtcbiAgICBkZWZhdWx0SWQgPSBjb25maWdzW2RlZmF1bHRDb3VudGVyXS5pZDtcbiAgfSBlbHNlIHtcbiAgICBkZWZhdWx0SWQgPSBkZWZhdWx0Q291bnRlcjtcbiAgfVxuXG4gIGlmICghZGVmYXVsdElkKSB7XG4gICAgY29uc29sZS53YXJuKCdZb3UgcHJvdmlkZWQgd3JvbmcgY291bnRlciBpZCBhcyBhIGRlZmF1bHQ6JywgZGVmYXVsdENvdW50ZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkZWZhdWx0Q291bnRlckV4aXN0cyA9IGZhbHNlO1xuICBsZXQgY29uZmlnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25maWcgPSBjb25maWdzW2ldO1xuICAgIGlmICghY29uZmlnLmlkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBzaG91bGQgcHJvdmlkZSBjb3VudGVyIGlkIHRvIHVzZSBZYW5kZXggbWV0cmlrYSBjb3VudGVyJywgY29uZmlnKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlkID09PSBkZWZhdWx0SWQpIHtcbiAgICAgIGRlZmF1bHRDb3VudGVyRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWRlZmF1bHRDb3VudGVyRXhpc3RzKSB7XG4gICAgY29uc29sZS53YXJuKCdZb3UgcHJvdmlkZWQgd3JvbmcgY291bnRlciBpZCBhcyBhIGRlZmF1bHQ6JywgZGVmYXVsdENvdW50ZXIpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyc0ZhY3RvcnkoY29uZmlnczogQ291bnRlckNvbmZpZyB8IENvdW50ZXJDb25maWdbXSkge1xuICByZXR1cm4gY3JlYXRlQ29uZmlncyhjb25maWdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3MoY29uZmlnczogQ291bnRlckNvbmZpZyB8IENvdW50ZXJDb25maWdbXSkge1xuICBsZXQgY291bnRlckNvbmZpZ3M6IENvdW50ZXJDb25maWdbXTtcbiAgaWYgKGNvbmZpZ3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNvdW50ZXJDb25maWdzID0gY29uZmlncztcbiAgfSBlbHNlIHtcbiAgICBjb3VudGVyQ29uZmlncyA9IFtjb25maWdzIGFzIENvdW50ZXJDb25maWddO1xuICB9XG4gIHJldHVybiBjb3VudGVyQ29uZmlncy5tYXAoKGNvbmZpZzogQ291bnRlckNvbmZpZykgPT4gT2JqZWN0LmFzc2lnbihuZXcgWWFuZGV4Q291bnRlckNvbmZpZygpLCBjb25maWcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcEluaXRpYWxpemVyRmFjdG9yeShjb3VudGVyQ29uZmlnczogWWFuZGV4Q291bnRlckNvbmZpZ1tdLCBwbGF0Zm9ybUlkOiBhbnkpIHtcbiAgaWYgKCFpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgIHJldHVybiAoKSA9PiAnbm9uZSc7XG4gIH1cbiAgY291bnRlckNvbmZpZ3MuZm9yRWFjaChjb3VudGVyQ29uZmlnID0+IHtcbiAgICBpZiAoY291bnRlckNvbmZpZy5sYXp5Q29uZmlnTW9kaWZpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY291bnRlckNvbmZpZy5sYXp5Q29uZmlnTW9kaWZpZXIoY291bnRlckNvbmZpZyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGluc2VydE1ldHJpa2EuYmluZChudWxsLCBjb3VudGVyQ29uZmlncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRNZXRyaWthKGNvdW50ZXJDb25maWdzOiBZYW5kZXhDb3VudGVyQ29uZmlnW10pIHtcbiAgY29uc3QgbmFtZSA9ICd5YW5kZXhfbWV0cmlrYV9jYWxsYmFja3MyJztcbiAgd2luZG93W25hbWVdID0gd2luZG93W25hbWVdIHx8IFtdO1xuICB3aW5kb3dbbmFtZV0ucHVzaCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIGNvdW50ZXJDb25maWdzKSB7XG4gICAgICAgIGNyZWF0ZUNvdW50ZXIoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9KTtcblxuICBjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICBzLmFzeW5jID0gdHJ1ZTtcblxuICBjb25zdCBhbHRlcm5hdGl2ZSA9IGNvdW50ZXJDb25maWdzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5hbHRlcm5hdGl2ZSk7XG5cbiAgaWYgKGFsdGVybmF0aXZlKSB7XG4gICAgcy5zcmMgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS95YW5kZXgtbWV0cmljYS13YXRjaC90YWcuanMnO1xuICB9IGVsc2Uge1xuICAgIHMuc3JjID0gJ2h0dHBzOi8vbWMueWFuZGV4LnJ1L21ldHJpa2EvdGFnLmpzJztcbiAgfVxuXG4gIGNvbnN0IGluc2V0U2NyaXB0VGFnID0gKCkgPT4gbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzLCBuKTtcblxuICBpZiAoKHdpbmRvdyBhcyBhbnkpLm9wZXJhID09PSAnW29iamVjdCBPcGVyYV0nKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluc2V0U2NyaXB0VGFnLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaW5zZXRTY3JpcHRUYWcoKTtcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXIoY29uZmlnOiBZYW5kZXhDb3VudGVyQ29uZmlnKSB7XG4gIHdpbmRvd1tnZXRDb3VudGVyTmFtZUJ5SWQoY29uZmlnLmlkKV0gPSBuZXcgWWEuTWV0cmlrYTIoY29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50ZXJOYW1lQnlJZChpZDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiBgeWFDb3VudGVyJHtpZH1gO1xufVxuIl19