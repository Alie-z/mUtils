# GenericUtils 类
GenericUtils 通用工具类

## notification
`notification`浏览器notification全局提示，并返回一个Promise
#### 参数
  - `options` 参数内容
  - `options.title`标题
  - `options.body`正文
  - `options.icon`logo
  - `options.show` 方法 显示时候触发的回调
  - `options.click`方法 点击时触发的回调
```js
/**
 * 浏览器提示
 * @param { Object } options
 * @param { String } options.title 浏览器提示的标题  类似标题
 * @param { String } options.body 浏览器提示的内容主体  类似正文
 * @param { String } options.icon 浏览器提示的图标用于  类似logo效果
 * @param { Function } options.show 浏览器提示的显示的时候执行的方法
 * @param { Function } options.click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 */
```
##### `Demo`:
```js
  const data = {
      title: 'notification',
      body: 'this is a test',
      logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
  }
GenericUtils.notification(data)
```

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
const color GenericUtils.randomColor(1)
console.log(color)
```

## layoutFramework
显示元素的outline出现布局框架，会在所有的dom元素上添加一个outline的随机颜色样式，方法来自Addy Osmani
##### `Demo`:
```js
GenericUtils.layoutFramework()
```

## calcStringLength
`calcStringLength`计算字符串的长度
#### 参数
  - `isStrict`是否按照汉字两个字符计算
```js
/**
 * 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str 要计算的字符串
 * @param { Boolean } isStrict true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @returns { Number } 返回字符串长度
 */
```
##### `Demo`:
```js
const str = 'd-utils组件'
console.log(GenericUtils.calcStringLength(str))
console.log(GenericUtils.calcStringLength(str, true))
```
##### `return`
    - 第一个返回结果：9
    - 第二个返回结果：11

## strTrim
`strTrim`字符串去空格
#### 参数
  - `type`判断的类型
```js
/**
 * 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首尾空格
 * @returns { String } 返回操作之后的字符串
 */
```
##### `Demo`:
```js
const str = ' d -js- ut ils '
// 0: 去除首位空格 默认为0
GenericUtils.strTrim(str)
GenericUtils.strTrim(str, 0)
// 1: 去除所有空格
GenericUtils.strTrim(str, 1)
// 2: 去除左边空格
GenericUtils.strTrim(str, 2)
// 3: 去除右边空格
GenericUtils.strTrim(str, 3)
```
##### `return` 为方便比较添加引号
    - 第一个返回结果：'d -js- ut ils'
    - 第二个返回结果：'d -js- ut ils'
    - 第三个返回结果：'d-utils'
    - 第四个返回结果：'d -js- ut ils '
    - 第五个返回结果：' d -js- ut ils'

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
