# FeedbackUtils 反馈工具类


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
 *Chrome上对http协议默认Notification.permission = 'denied'，想要推送消息就要使用https协议！ 调试的时候使用http://localhost/XXXX
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
  const notificationData = {
    title: '疏影横斜水清浅',
    body: '暗香浮动月黄昏',
    icon: 'http://static.huadong.uniqorn.com.cn/js/utils/5deb72135a682e007c405d87.png',
    show: () => {
      Toast('notification show')
    },
    click: () => {
      window.open('https://alie-z.github.io/mUtils/#/lib/_StoreUtils')
    }
  }
  FeedbackUtils.notification(notificationData)
```


## Toast
`Toast`吐司提示
##### 参数
  - `msg` 提示的内容
  - `duration` 提示时间 (默认3s)
```js
/**
 * Toast 封装
 * @param msg 提示的内容
 * @param duration 时间 默认3秒
 * @constructor
 */
```
##### `Demo`:
```js
FeedbackUtils.Toast('hello,world!', 6000)
```

## Loading

##### 方法
 - `show` 显示loading
 - `clear` 关闭loading  

##### 参数
  - `message` 提示的内容
  - `messageColor` message && message颜色 (默认为 #fff)
  - `spinner.point` spinner选择点/默认
  - `spinner.line` spinner选择线
  - `spinner.color` loading的颜色 (默认为 #fff)
  - `spinner.bColor` pinner选择点 && 底部轮廓的颜色 (默认为 #000)
  - `spinner.duration` loading一轮的时间 /s (默认0.8s)
 
```js
/**
 * Loading 封装
 * @param param 可配置参数
 * @param {param.message} loading 下面的文字
 * @param {param.messageColor} message && message颜色 (默认为 #fff)
 * @param {param.spinner.point} spinner选择点 默认
 * @param {param.spinner.line} spinner选择线
 * @param {param.spinner.bColor} pinner选择点 && 底部轮廓的颜色 (默认为 #000)
 * @param {param.spinner.color} loading的颜色 (默认为 #fff)
 * @param {param.spinner.duration} loading一轮的时间 /s
 * @constructor
 */
```
##### `Demo`:
```js
// 开启loading
FeedbackUtils.Loading.show({
      message: 'hello,world',
      messageColor: '#f09',
      spinner: {
        name: 'point',
        color: '#e72',
        bColor: 'red',
        duration: '.5'
      }
    })
// 关闭loading
FeedbackUtils.Loading.clear()
```
