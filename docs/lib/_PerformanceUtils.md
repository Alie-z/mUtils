# PerformanceUtils
PerformanceUtils 是浏览器性能相关的监控

## performance
`performance`: 属性， window.performance对象

## timing
`timing`: 属性， window.performance.timing对象

## dnsTime
`dnsTime`: 方法， DNS查询耗时
```js
/**
 * @description DNS查询耗时
 * @description timing.domainLookupEnd - timing.domainLookupStart
 * @returns { number } 时差 单位：ms
 */
```

## loadTime
`dnsTime`: 方法， 白屏时间
```js
/**
 * @description 白屏时间
 * @description timing.domLoading - timing.navigationStart
 * @returns { number } 时差 单位：ms
 */
```

## requestTime
`dnsTime`: 方法， 请求耗时
```js
/**
 * @description request请求耗时
 * @description timing.responseEnd - timing.responseStart
 * @returns { number } 时差 单位：ms
 */
```

## tcpTime
`dnsTime`: 方法， TCP链接耗时
```js
/**
 * @description TCP链接耗时
 * @description timing.connectEnd - timing.connectStart
 * @returns { number } 时差 单位：ms
 */
```

## renderDomTime
`dnsTime`: 方法， 解析dom树耗时
```js
/**
 * @description 解析dom树耗时
 * @description timing.domComplete - timing.domInteractive
 * @returns { number } 时差 单位：ms
 */
```

## readyDomTime
`dnsTime`: 方法， domready时间(用户可操作时间节点)
```js
/**
 * @description domready时间(用户可操作时间节点)
 * @description timing.domContentLoadedEventEnd - timing.navigationStart
 * @returns { number } 时差 单位：ms
 */
```

## loadFullTime
`dnsTime`: 方法， onload时间(总下载时间)
```js
/**
 * @description onload时间(总下载时间)
 * @description timing.loadEventEnd - timing.navigationStart
 * @returns { number } 时差 单位：ms
 */
```

## logger
`logger` 在页面加载300毫秒之后打印数据信息
```js
/**
 * @description onload时间(总下载时间)
 * @description timing.loadEventEnd - timing.navigationStart
 * @returns { number } 时差 单位：ms
 */
  PerformanceUtils.logger()

// DNS查询耗时 0
// 白屏时间 34
// request请求耗时 1
// TCP链接耗时 0
// 解析dom树耗时 1162
// 用户可操作时间节点 207
// onload时间 1366
```