# HttpRequestUtils 类
HttpRequestUtils 基于 axios的二次封装

## successCode
`successCode`: 属性，成功的code码

## baseUrl
`baseUrl`: 属性，对应axios的baseUrl

## timeOut
`timeOut`: 属性，对应axios的timeOut

## isInit
`isInit`: 属性，是否初始化了，没有让用户执行初始化方法

## init
`init`: 方法，初始化axios的配置，包括基本配置，响应拦截，请求拦截等等，详情见 https://github.com/IFmiss/d-utils/blob/typescript/src/lib/httpRequestUtils/axiosConfig.ts
#### `注意`： init方法只需要调用一次
#### 参数
`fn`: 执行axios的方法，方法的参数一个为axios, 一个为HttpRequestUtils类
```js
/**
 * @description 初始化axios的基础信息以及 axios的响应拦截的操作
 * @param fn 
 * 方法内部有两个参数，一个是axios，另外一个是 HttpRequestUtils 的class
 * @return { class } HttpRequestUtils 返回一个构造函数
 */
```
##### `Demo`:
```js
// axiosConfig
export function axiosConfig (axios, HttpRequestUtils) {
  axios.defaults.baseURL = HttpRequestUtils.baseUrl
  axios.defaults.timeout = HttpRequestUtils.timeOut
    // Add a request interceptor
  axios.interceptors.request.use((config: any) => {
    // Do something before request is sent
    return config
  }, (error) => {
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use((response: any) => {
    // Do something with response data
    return response
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  })
}
```
```js
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
HttpRequestUtils.init(axiosConfig)

// 犹豫init返回HttpRequestUtils类所以可以链式调用
HttpRequestUtils.init(axiosConfig).get(url)
```

## get
`get` 方法是axios的get方法的封装
#### 参数
- `url` 请求的url
- `config` 相关axios的配置信息
```js
/**
 * @description get的请求操作
 * @param { string } url 请求的url
 * @param { object } params 请求的参数
 * @param { object } config 相关axios的配置信息
 * @return { Promise }
 */
```
#### `Demo`
```js
HttpRequestUtils.get('http://www.test.com').then((res) => {
    alert('成功')
}, (err) => {
    alert('失败')
})
```

## post
`post` 方法是axios的post方法的封装
#### 参数
- `url` 请求的url
- `data` 请求的参数
- `config` 相关axios的配置信息
```js
/**
 * @description post的请求操作
 * @param { string } url 请求的url
 * @param { object } data 请求的参数
 * @param { object } config 相关axios的配置信息
 * @return { Promise }
 */
```
#### `Demo:`
```js
HttpRequestUtils.post('http://www.test.com', {
  a: 1,
  b: 2
}, {
  // axios config
}).then((res) => {
    alert('成功')
}, (err) => {
    alert('失败')
})
```