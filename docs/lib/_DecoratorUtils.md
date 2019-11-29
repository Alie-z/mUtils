# DecoratorUtils
DecoratorUtils 通用的装饰器

## log
`log` 装饰器，打印类的方法执行信息
```ts
import DecoratorUtils from './DecoratorUtils'
class A {
  @DecoratorUtils.log
  static calcStringLength (str: string, isStrict?: boolean): number {
    if (typeof str !== 'string') {
      LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] GenericUtils calcStringLength error => ')
      return
    }
    if (!isStrict) return str.length
    let a = 0
    for (let i = 0; i < str.length; i++ ) {
      let count = str.charCodeAt(i) > 255 ? 2 : 1
      a += count
    }
    return a
  }
}
A.calcStringLength('nihao')

// 结果
// DecoratorUtils calcStringLength方法的执行信息
// 方法准备执行: calcStringLength(1111)
// 详细的参数值: ["1111"]
// 执行成功结果: 4
```

## fnTime
`fnTime` 装饰器，打印方法执行时间
```ts
import DecoratorUtils from './DecoratorUtils'
class A {
  @DecoratorUtils.fnTime
  static calcStringLength (str: string, isStrict?: boolean): number {
    if (typeof str !== 'string') {
      LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] GenericUtils calcStringLength error => ')
      return
    }
    if (!isStrict) return str.length
    let a = 0
    for (let i = 0; i < str.length; i++ ) {
      let count = str.charCodeAt(i) > 255 ? 2 : 1
      a += count
    }
    return a
  }
}
A.calcStringLength('nihao')

// 结果
// [d-utils] calcStringLength方法执行时间: : 4.06005859375ms
```
