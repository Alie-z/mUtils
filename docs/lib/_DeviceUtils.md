# DeviceUtils 静态类
DeviceUtils  类 对于移动端操作的类

## checkLayoutOrientation
`checkLayoutOrientation`判断页面是否是竖屏幕,  是则不处理, 如果事横屏显示提示信息, 此方法会实时监听横竖屏幕检测, 如果事横屏则显示提示，否则不显示
```js
/**
 * 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
 * @param { String } 提示内容 默认为 请旋转屏幕，以达到更好的浏览效果
 */
```
##### `Demo`:
```js
DeviceUtils.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
DeviceUtils.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
```
##### `效果图`
竖屏效果

![竖屏](./../assets/device/checkLayoutOrientation/checkLayoutOrientation-1.jpeg ':size=320px')

横屏效果

![横屏](./../assets/device/checkLayoutOrientation/checkLayoutOrientation-2.jpeg ':size=540px')
