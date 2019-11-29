export default class PerformanceUtils {
    /**
     * @description window.performance对象
     */
    static performance: Performance;
    /**
     * @description window.performance.timing对象
     */
    static timing: PerformanceTiming;
    /**
     * @description DNS查询耗时
     * @description timing.domainLookupEnd - timing.domainLookupStart
     * @returns { number } 时差 单位：ms
     */
    static dnsTime(): number;
    /**
     * @description 白屏时间
     * @description timing.domLoading - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static loadTime(): number;
    /**
     * @description request请求耗时
     * @description timing.responseEnd - timing.responseStart
     * @returns { number } 时差 单位：ms
     */
    static requestTime(): number;
    /**
     * @description TCP链接耗时
     * @description timing.connectEnd - timing.connectStart
     * @returns { number } 时差 单位：ms
     */
    static tcpTime(): number;
    /**
     * @description 解析dom树耗时
     * @description timing.domComplete - timing.domInteractive
     * @returns { number } 时差 单位：ms
     */
    static renderDomTime(): number;
    /**
     * @description domready时间(用户可操作时间节点)
     * @description timing.domContentLoadedEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static readyDomTime(): number;
    /**
     * @description onload时间(总下载时间)
     * @description timing.loadEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static loadFullTime(): number;
    /**
     * @description 打印已知的所有数据信息
     */
    static logger(): void;
}
