# UrlUtils
url的操作，浏览器相关

## parseUrl
`parseUrl` 获取url地址的参数信转化成键值对的对象格式
#### 参数
- `url` 解析的url地址
```js
/**
 * 获取url地址的参数信转化成键值对的对象格式
 * @param { string } url 解析的url地址
 */
```
#### `Demo:`
```js
UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
```

## stringifyUrl
`stringifyUrl`将单层object对象且属性为基本数据类型(通常都为string)转换成`a=1&b=2&c=3`的格式效果
```js
/**
 * 对象转字符串 属性=值&属性=值的字符串格式
 * @param { Object } obj  需要操作的对象
 * @return { String } 返回一个字符串 a=1&b=2
 */
```
#### `Demo`:
```js
UrlUtils.stringifyUrl({a: 1, b: 2}) // 'a=1&b=2'
```

## deleteUrlParam
`deleteUrlParam` 用于移除url中某些不想要的参数信息并返回新的url地址

```js
/**
 * @description 移除url的某一个参数
 * @param { Array } paramNames 参数名称的数组
 * @param { URL } url url地址
 * @return { String } 返回一个新地址
 */
```
#### `Demo`:
```js
UrlUtils.deleteUrlParam(['code', 'name'], 'http://localhost:2008/#a?a=22&b=2&code=3')
// 'http://localhost:2008/#a?a=22&b=2'
```
