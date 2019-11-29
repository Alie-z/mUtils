# 快速使用
#### 安装 （3.0.0及以上的版本）
使用npm安装 `d-utils` 依赖
```bash
npm i d-utils
```
yarn
```hash
yarn add d-utils
```
#### 3.0正式使用 d-utils 包 ， 现默认使用最新模式
```bash
npm i d-utils
or
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
复制一下代码在控制台打印一下，看会有什么变化
```js
Dutils.DomUtils.cssFilter(document.body, 'grayscale', 1)
```
##### 后续demo都会使用对应的class名称
