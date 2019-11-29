/**
 * 网页性能监测
 */
import LogUtils from './../logUtils/index'

export default class PerformanceUtils {
  /**
   * @description window.performance对象
   */
  static performance = window.performance

  /**
   * @description window.performance.timing对象
   */
  static timing = window.performance.timing

  /**
   * @description DNS查询耗时
   * @description timing.domainLookupEnd - timing.domainLookupStart
   * @returns { number } 时差 单位：ms
   */
  static dnsTime (): number {
    return PerformanceUtils.timing.domainLookupEnd - PerformanceUtils.timing.domainLookupStart
  }

  /**
   * @description 白屏时间
   * @description timing.domLoading - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static loadTime (): number {
    return PerformanceUtils.timing.domLoading - PerformanceUtils.timing.navigationStart
  }

  /**
   * @description request请求耗时
   * @description timing.responseEnd - timing.responseStart
   * @returns { number } 时差 单位：ms
   */
  static requestTime (): number {
    return PerformanceUtils.timing.responseEnd - PerformanceUtils.timing.responseStart
  }

  /**
   * @description TCP链接耗时
   * @description timing.connectEnd - timing.connectStart
   * @returns { number } 时差 单位：ms
   */
  static tcpTime (): number {
    return PerformanceUtils.timing.connectEnd - PerformanceUtils.timing.connectStart
  }

  /**
   * @description 解析dom树耗时
   * @description timing.domComplete - timing.domInteractive
   * @returns { number } 时差 单位：ms
   */
  static renderDomTime (): number {
    return PerformanceUtils.timing.domComplete - PerformanceUtils.timing.domInteractive
  }

  /**
   * @description domready时间(用户可操作时间节点)
   * @description timing.domContentLoadedEventEnd - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static readyDomTime (): number {
    return PerformanceUtils.timing.domContentLoadedEventEnd - PerformanceUtils.timing.navigationStart
  }

  /**
   * @description onload时间(总下载时间)
   * @description timing.loadEventEnd - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static loadFullTime (): number {
    return PerformanceUtils.timing.loadEventEnd - PerformanceUtils.timing.navigationStart
  }

  /**
   * @description 打印已知的所有数据信息
   */
  static logger (): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        LogUtils.group('[d-utils] PerformanceUtils logger - list: ', LogUtils.infoColor)
        LogUtils.logDefault(PerformanceUtils.dnsTime(), 'DNS查询耗时')
        LogUtils.logDefault(PerformanceUtils.loadTime(), '白屏时间')
        LogUtils.logDefault(PerformanceUtils.requestTime(), 'request请求耗时')
        LogUtils.logDefault(PerformanceUtils.tcpTime(), 'TCP链接耗时')
        LogUtils.logDefault(PerformanceUtils.renderDomTime(), '解析dom树耗时')
        LogUtils.logDefault(PerformanceUtils.readyDomTime(), '用户可操作时间节点')
        LogUtils.logDefault(PerformanceUtils.loadFullTime(), 'onload时间')
        LogUtils.groupEnd()
      }, 300)
    })
  }
}
