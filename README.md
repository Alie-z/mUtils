## 关于d-utils

[文档地址](https://d-utils.daiwei.site)

#### 产生背景
这是关于个人日常比较通用代码的收集，方便日后使用，编写文档为了以后方便查阅

#### 功能描述
该方法一共包含以下属性，每个属性收集了对应的方法内容

- `DomUtils`
  该属性主要时针对dom元素相关的方法，针对于元素的一些操作

- `DeviceUtils`
  设备相关的检测与方法

- `StoreUtils`
  该属性主要是对于数据的操作

- `HttpRequestUtils`
  基于axios请求的封装

- `ExpUtils`
  该属性是d-js-utlis里的一个类，此属性包含对于一些字符，或者元素判断是否符合要求

- `GenericUtils`
  其他相关js工具代码，通用工具类

- `LogUtils`
  日志相关

- `PerformanceUtils`
  浏览器性能相关

- `UrlUtils`
  url地址的一系列操作

- `WeixinUtils`
  微信jssdk相关的方法

- `ImageUtils`
  图片合成相关


# 快速使用
#### 安装 （3.0及以上的版本）
使用npm安装 `d-utils` 依赖
```bash
npm i d-utils
```
yarn
```hash
yarn add d-utils
```
#### 使用
获取所有方法
```js
import Dutils from 'd-utils'
Dutils.DomUtils.addClass(document.body, 'd-utils')
```
按需引入
```js
import { DomUtils, LogUtils } from 'd-utils'
DomUtils.addClass(document.body, 'd-utils')
LogUtils.logInfo('d-utils')
```

直接引用js
```html
<script src="www.daiwei.org/d-utils.js"></script>
<script>
  Dutils.DomUtils.addClass(document.body, 'd-utils')
</script>
```
```js
Dutils.DomUtils.cssFilter(document.body, 'grayscale', 1)
```

#### 新版本支持部分代码tree-shacking
可树摇的模块：`decoratorUtils, deviceUtils, domUtils, expUtils, genericUtils, storeUtils, urlUtils`
**example:**
```ts
import { isEmptyStr } from 'd-utils/lib/expUtils'
```
