# GenericUtils 类
GenericUtils 通用工具类

## randomColor
`randomColor`随机生成一个rgba的颜色值
#### 参数
  - `opacity` 透明度 默认为1
```js
/**
 * 返回rgba随机色
 * @param { Number } opacity 透明度 0～1之间
 * @returns { String } rgba色值
 */
```
##### `Demo`:
```js
const color = GenericUtils.randomColor(1)
console.log(color)
```

## layoutFramework
显示元素的outline出现布局框架，会在所有的dom元素上添加一个outline的随机颜色样式，方法来自Addy Osmani
##### `Demo`:
```js
GenericUtils.layoutFramework()
```

## throttle
`throttle`节流函数，设定多少秒执行下一次效果
  - `fn`方法 需要节流的函数
  - `t`节流时间，多久以后执行一次方法 单位ms
```js
/**
 * 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 */
```
##### `Demo`:
```js
// 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
  window.onresize = GenericUtils.throttle(function () {
    // es5 获取参数
    let arg = Array.prototype.slice.call(arguments)
    // es6 获取参数
    let arg1 = Array.from(arguments)
    console.log('resize-throttle', arg)
    console.log('resize-throttle', arg1)
  }, 1000)
```

## debounce
`debounce`函数防抖指定时间以后才能继续执行fn方法
  - `fn`方法 需要防抖的函数
  - `t`防抖时间，多久以后才能再执行 单位ms
```js
/**
 * 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 */
```
##### `Demo`:
```js
// 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
  window.onresize = GenericUtils.debounce(function () {
    // es5 获取参数
    let arg = Array.prototype.slice.call(arguments)
    // es6 获取参数
    let arg1 = Array.from(arguments)
    console.log('resize-debounce', arg)
    console.log('resize-debounce', arg1)
  }, 1000)
```

## formatDate
`formatDate`是针对时间的格式化，可转化成自定义的格式类型
  - `fmt`格式类型 如 `yyyy-MM-dd hh:mm:ss`
  - `Date`时间 new Date()，时间戳等等
```js
/**
 * 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 */
```
##### `Demo`:
```js
GenericUtils.formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
```
##### `return`
`2018-08-15 01:46:22`

## copyCode
`copyCode`复制字符串到剪贴板
  - `str`要复制的字符串内容
```js
/**
 * 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
 * @param { String } str 
 */
```
### `Demo`:
```js
GenericUtils.copyCode('hello world')
```

## base64Encode
`base64Encode` 字符串转成base64编码
```ts
/**
 * @description 字符串转成base64编码
 * @param str 字符串
 * @return str base64 字符串
 */
```
### `Demo`: 
```ts
GenericUtils.base64Encode('hello world!');    // aGVsbG8gd29ybGQh
```

## base64Decode
`base64Decode` base64解码成字符串
```ts
/**
 * @description base64解码成字符串
 * @param str base64字符串
 * @return 返回str字符串
 */
```
### `Demo`: 
```ts
GenericUtils.base64Decode('aGVsbG8gd29ybGQh');    // hello world!
```
