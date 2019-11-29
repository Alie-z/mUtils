/**
 * 图片合成等操作
 */
import LogUtils from './../logUtils/index'
import { ImageUtilsType } from './../type'

interface IImageUtils {
  addSourse: (resourse: ImageUtilsType.Resourse) => ImageUtils;
  compose: () => Promise<any>;
  convertCanvasToImage: () => any;
}

export default class ImageUtils implements IImageUtils {
  /**
   * 基于当前屏幕的比例
   */
  public persent: number = 1

  /**
   * canvas的元素
   */
  private canvas: any = null

  /**
   * context canvas 上下文
   */
  private context: any = null

  /**
   * 合并的背景地址
   */
  private mainResource: string = ''

  /**
   * canvas的宽度  实际上数合并背景的宽度
   */
  private canvasWidth: number = 0

  /**
   * canvas的高度  实际上数合并背景的高度
   */
  private canvasHeight: number = 0

  public constructor (backgroud: string, persent?: number) {
    this.mainResource = backgroud
    if (persent) {
      this.persent = persent
    }
  }

  /**
   * 资源列表 
   */
  private resourceList: ImageUtilsType.Resourse[] = []

  public addSourse (resourse: ImageUtilsType.Resourse): ImageUtils {
    this.resourceList.push(resourse)
    return this
  }

  /**
   * 加载图片
   */
  private async loadResourse (src: string, resourse?: ImageUtilsType.Resourse): Promise<any> {
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = src
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const result = resourse ? {
          ref: image,
          ...resourse
        } : image
        resolve(result)
      }

      image.onerror = () => {
        LogUtils.logError(src, '[d-utils] ImageUtils loadResourse 裁剪图片加载错误')
        reject()
      }
    })
  }

  private composeMainResource (image: any) {
    const radio = image.width / image.height
    this.canvasWidth = image.width * this.persent
    this.canvasHeight = this.canvasWidth / radio
    // 设置canvas的宽高
    this.canvas.width = this.canvasWidth
    this.canvas.height = this.canvasHeight
    this.context.drawImage(image,
                            0,
                            0,
                            this.canvasWidth,
                            this.canvasHeight)
    this.context.restore()
  }

  /**
   * @description cavans绘制效果
   * @param image addSourse 添加的数据信息
   */
  private renderResource (image: any) {
    const newImageInfo = {
      left: image.left * this.canvasWidth,
      top: image.top * this.canvasHeight,
      width: image.width * this.canvasWidth,
      height: image.height * this.canvasHeight,
    }

    this.context.save()
    if (image.needRound) {
      // 走圆形绘制图片 此时都视为正方形
      this.context.arc(newImageInfo.width / 2 + newImageInfo.left,
                        newImageInfo.width / 2 + newImageInfo.top,
                        newImageInfo.width / 2,
                        0,
                        Math.PI * 2,
                        false)
      this.context.clip()
      this.context.drawImage(image.ref,
                            newImageInfo.left,
                            newImageInfo.top,
                            newImageInfo.width,
                            newImageInfo.width)
      this.context.restore()
    } else {
      // 走正常绘制
      this.context.drawImage(image.ref,
                             newImageInfo.left,
                             newImageInfo.top,
                             newImageInfo.width,
                             newImageInfo.height)
      this.context.restore()
    }
  }

  /**
   * @description 初始化canvas的设置
   * @return { Promise } 返回合成成功的image对象信息
   */
  public async compose (): Promise<any> {
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    const mainResource = await this.loadResourse(this.mainResource)
    this.composeMainResource(mainResource)

    // 开始执行
    const composeQueue: any[] = []
    const resourceL = this.resourceList.reduce((total: any[], item: ImageUtilsType.Resourse, index: number): any[] => {
      if (item.type === ImageUtilsType.TextType.Image) {
        const data = this.loadResourse(item.content, item)
        total.push(data)
      } else {
        this.context.font = item.fanmily || ImageUtilsType.FontStyle.fanmily
        this.context.fillStyle = item.color || ImageUtilsType.FontStyle.color
        this.context.fillText(item.content,
                              item.left * this.canvasWidth,
                              item.top * this.canvasHeight)
      }
      return total
    }, composeQueue)

    const resolveQueue: any = await Promise.all(resourceL)

    // 再次绘制
    await resolveQueue.forEach((item: ImageUtilsType.Resourse) => {
      this.renderResource(item)
    })
    
    return Promise.resolve(this.convertCanvasToImage())
  }

  /**
   * @description canvase转换成图片
   * @return { Image } 返回一个new Image的实例
   */
  public convertCanvasToImage (): any {
    const image = new Image()
    image.src = this.canvas.toDataURL('image/png', 1)
    LogUtils.logSuccess(image, '[d-utils] ImageUtils convertCanvasToImage 图片对象创建成功')
    return image
  }
}
