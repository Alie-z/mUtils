# ExpUtils 静态类
ExpUtils 是d-utlis里的一个属性，此属性包含对于一些字符，或者元素判断是否符合要求

## ua
`ua`: 属性， window.navigator.userAgent

## EXP_MOBILE
`EXP_MOBILE`: 属性， 正则表达式 是否为移动设备

## isMobile
`isMobile`: 方法， 判断是否是移动端设备
```js
/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 */
```
##### `Demo`:
```js
ExpUtils.isMobile() // false
```

## EXP_IOS
`EXP_IOS`: 属性， 正则表达式 是否是IOS操作系统

## isIOS
`isIOS`: 方法， 判断是否是IOS操作系统
```js
/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 */
```
##### `Demo`:
```js
ExpUtils.isIOS() // false
```

## isAndroid
`isAndroid`: 方法， 判断是否是Android操作系统
```js
/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 */
```
##### `Demo`:
```js
ExpUtils.isAndroid() // false
```

## EXP_PHONE_NUM
`EXP_PHONE_NUM`: 属性， 正则表达式 手机的合法校验

## isPhoneNum
`isPhoneNum`: 方法， 判断是否是正确的手机号格式
##### 参数
  - `num` 手机号内容，字符串，如果不是字符串会被转换成字符
```js
/**
 * 手机号格式判断
 * @param { String } num 手机号
 */
```
##### `Demo`:
```js
ExpUtils.isPhoneNum('13651971940')   // true
```

## EXP_EMAIL
`EXP_EMAIL`: 属性，正则表达式 邮箱是否合法

## isEmail
`isEmail`: 方法，判断是否是正确的邮箱地址格式
##### 参数
  - `email` 邮箱地址，如果不是字符串会被转换成字符
```js
/**
 * 邮箱地址格式判断
 * @param { String } num 邮箱
 */
```
##### `Demo`:
```js
ExpUtils.isEmail('185098535@qq.com')  // true
```

## isWeiXin
`isWeiXin`: 方法，判断当前是否是在微信浏览器中
```js
 /**
   * 判断当前是否是微信浏览器
   * @return Boolean 
   */
```
##### `Demo`:
```js
ExpUtils.isWeiXin()  // true
```

## EXP_CHINESE
`EXP_CHINESE`: 属性，是否全部是中文

## isChinese
`isChinese`: 方法，判断字符串是否是全中文
```js
/**
 * 判断字符串是否都是中文
 * @param { String } str 
 * @return Boolean 
 */
```
##### `Demo`:
```js
ExpUtils.isChinese('你好，世界')  // false
ExpUtils.isChinese('你好')   // true
ExpUtils.isChinese('world')   // false
```

## isObject
`isObject` 方法，判断对象是否是纯object的对象 {}，键值对
##### `Demo`:
```js
ExpUtils.isObject('{}')  // false
ExpUtils.isObject({a: 1})   // true
```

## isArray
`isArray`: 方法，判断对象是否是数组
##### `Demo`:
```js
ExpUtils.isArray('[]')  // false
ExpUtils.isArray(new Array(5))   // true
```

## isEmptyObject
`isEmptyObject`: 方法，判断对象是否是空对象
#### `Demo`:
```js
let obj = {
  a: 1,
  b: 2
}
let obj1 = {}
ExpUtils.isEmptyObject(obj)   // false
ExpUtils.isEmptyObject(obj1)   // true
```

## isEmptyStr
`isEmptyStr` 判断是否是空字符串  多个空格也视为空字符
```ts
/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
ExpUtils.isEmptyStr('') // true
ExpUtils.isEmptyStr('    ') // true
ExpUtils.isEmptyStr('  isEmptyStr  ') // false
```
