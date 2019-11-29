# ImageUtils
ImageUtils 不是静态类  需要new ImageUtils() 实例化才可操作

## 实例化 new ImageUtils(url, persent)
初始化ImageUtils
#### 参数
- `url` 背景图片地址
- `persent` 图片的比例对应输出图片的大小分辨率

## addSourse
`addSourse` 添加需要合成的图片信息放到合成的队列中
#### 参数
- `resourse` 资源信息
```ts
interface Resourse {
  // 内容  可以是图片地址，可以是文字内容
  content: string;
  // left的位置
  left: number;
  // top的位置
  top: number;
  // 是否渲染圆形图片
  needRound: boolean;
  // 渲染的类型  文本: text,  还是图片: image
  type: string;
  // 文本信息的样式  默认 14px Arial
  fanmily?: string;
  // 文本信息的颜色
  color?: string;
  // 图片的宽度
  width?: number;
  // 文本的最大宽度（暂时没有加文本最大宽度功能）
  maxWidth?: number;
  // 图片的高度
  height?: number;
}
```
#### `Demo:`
```js
const imageCanvas = new ImageUtils('...')
imageCanvas.addSourse({
  content: '...',
  width: 0.1,
  height: 0.1,
  left: 0.1,
  top: 0.1,
  type: 'image',
  needRound: false
}).addSourse({
  content: 'd-utils',
  left: 0.2,
  top: 0.2,
  type: 'text'
})
```

## compose
`compose` canvas渲染
```js
/**
 * @description 初始化canvas的设置
 * @return { Promise } 返回合成成功的image对象信息
 */
```
#### `Demo:`
```js
const imageCanvas = new ImageUtils('...')
imageCanvas.addSourse({
  content: '...',
  width: 0.1,
  height: 0.1,
  left: 0.1,
  top: 0.1,
  type: 'image',
  needRound: false
}).addSourse({
  content: 'd-utils',
  left: 0.2,
  top: 0.2,
  type: 'text'
}).compose().then((image) => {
  document.body.appendChild(image)
})
```

## convertCanvasToImage
`convertCanvasToImage`: canvase转换成图片
```js
/**
 * @description canvase转换成图片
 * @return { Image } 返回一个new Image的实例
 */
```
#### `Demo:`
```js
imageCanvas.convertCanvasToImage()
```
