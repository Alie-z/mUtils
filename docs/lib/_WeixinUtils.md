# WeixinUtils
WeixinUtils 是微信公众号相关的操作，主要是微信jssdk

## wx
`wx`: 属性， wxjssdk的实例

## sdkUrlIosOrAndorid
`plantSdkUrlIosOrAndorid`: 方法，获取请求jssdk的url
`注意`: IOS和微信安卓低版本需要记录第一次进入项目得到url，作为jssdk请求的url，否则会有签名错误
```js
/**
 * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
 * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
 * 当前这种只支持与VUE单页面模式
 * @returns 返回获取jssdk的url参数值
 */
```
#### `Demo:`
```js
WeixinUtils.sdkUrlIosOrAndorid()
```

## plantSdkUrlIosOrAndorid
`plantSdkUrlIosOrAndorid`: 方法，IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，需要在项目打开的时候执行一次这个方法

## wxSign
`wxSign`: 方法，jsapi_ticket 用户微信验签，生成 timestamp，nonceStr，signature 的内容，
```js
/**
 * @description wxSign 微信验签的动作
 * @param { String }  jsapi_ticket  公众号用于调用微信JS接口的临时票据
 * @return { IWxSign } 返回 timestamp， nonceStr， signature
 */
```

## routerAuthorized
`routerAuthorized` 跳转微信oauth2授权登录 非静默授权
```ts
/**
 * 跳转微信oauth2授权登录 非静默授权
 * @param { String }  appId
 */
```

## initWxConfig
`initWxConfig`: 初始化微信配置签名
```js
/**
 * @description 初始化微信配置签名
 * @param { Object } data  微信的签名配置
 * @props { Boolean } data.debug  开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
 * @props { String } data.appId  必填，公众号的唯一标识
 * @props { Number } data.timestamp  必填，生成签名的时间戳
 * @props { String } data.nonceStr  必填，生成签名的随机串
 * @props { String } data.signature  必填，签名
 * @props { Array } data.jsApiList  必填，需要使用的JS接口列表
 * @link 接口列表地址 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 */
```
#### `Demo`
```ts
initWxConfig({
  debug: true,   // 可选 默认false
  appId: '*******',
  timestamp: '*******',
  nonceStr: '*******',
  signature: '*******',
  jsApiList: ['****', '***']
})
```

## wxShareToFriend
`wxShareToFriend`: 方法， 分享给朋友
```js
/**
 * @description 分享给朋友
 * @param { Object } sharInfo  分享的内容
 * @props { String } sharInfo.title 分享的title
 * @props { String } sharInfo.desc 分享描述
 * @props { String } sharInfo.link 分享链接
 * @props { String } sharInfo.imgUrl 分享图标
 * @props { Function } sharInfo.success 成功的回调
 * @props { Function } sharInfo.cancel  取消的回调
 * @props { Function } sharInfo.complete 完成的回调
 * @return { Promise<IWxCallBackType> } 返回一个promise
 */
```

## wxShareToFriendCircle
`wxShareToFriendCircle`: 方法， 分享到朋友圈
```js
/**
 * @wxShareToFriendCircle 分享到朋友圈
 * @param { Object } sharInfo  分享的内容
 * @props { String } sharInfo.title 分享的title
 * @props { String } sharInfo.link 分享链接
 * @props { String } sharInfo.imgUrl 分享图标
 * @props { Function } sharInfo.success 成功的回调
 * @props { Function } sharInfo.cancel  取消的回调
 * @props { Function } sharInfo.complete 完成的回调
 * @return { Promise<IWxCallBackType> } 返回一个promise
 */
```

## hideAllNonBaseMenuItem
`hideAllNonBaseMenuItem`: 方法，隐藏所有非基础按钮接口。
```ts
/**
 * 隐藏所有非基础按钮接口
 * @return { Promise<IWxCallBackType> } 返回一个promise
 */
```



## hideMenuItems
`hideMenuItems` 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
```ts
/**
 * 批量隐藏功能按钮接口
 * @param { array } arr // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
 * @return { Promise<IWxCallBackType> } 返回一个promise
 */
```

## plantIosReloadShim (3.0.1)
`plantIosReloadShim` 用于解决ios 手机在code过期之后会重新静默授权，会导致分享失败，通过url中是否存在code，针对ios用户执行reload的操作
- 此方法需要在路由守卫内执行

## reloadIosWhenCode (3.0.1)
`reloadIosWhenCode` 在其他页面都需要添加改方法，用户在页面加载之后重新reload，已保证微信分享正常
