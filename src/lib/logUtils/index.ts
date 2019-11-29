import { isObject } from './../expUtils/index'
import { LogUtilsType } from './../type'
/**
 * 日志的打印封装
 */
export default class LogUtils {
  /**
   * 提示色  '#9E9E9E'   默认灰色
   */
  static defaultColor: string = '#9E9E9E'

  /**
   * 提示色  '#0099FF'   蓝色
   */
  static infoColor: string = '#0099FF'

  /**
   * 提示色  '#00CC99'   绿色
   */
  static successColor: string = '#00CC99'

  /**
   * 提示色  '#CC3366'   红色
   */
  static errorColor: string = '#CC0000'

  /**
   * 提示色  '#CC9966'   黄色
   */
  static warningColor: string = '#FF9966'

  /**
   * console提示信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @param { string } color  颜色
   * @example
   * LogUtils.console(window.screen, 'window:', 'red')
   */
  static console (data: any, dataTitile: string = '数据信息', color: string = LogUtils.defaultColor): void {
    if (isObject(data)) {
      if (Array.isArray(data)) {
        console.log(`%c${dataTitile}`, `color: ${color}; font-weight: bold`, data)
      } else {
        console.log(`%c${dataTitile}`, `color: ${color}; font-weight: bold`, {...data})
      }
      return
    }
    console.log(`%c${dataTitile}`, `color: ${color}; font-weight: bold`, data)
  }

  /**
   * logDefault提示信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @example
   * LogUtils.logDefault('date', 'logDefault')
   */
  static logDefault (data: any, dataTitile: string = '[d-utils] log_utils default => '): void {
    LogUtils.console(data, dataTitile, LogUtils.defaultColor)
  }

  /**
   * logInfo提示信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @example
   * LogUtils.logInfo('date', 'logInfo')
   */
  static logInfo (data: any, dataTitile: string = '[d-utils] log_utils info => '): void {
    LogUtils.console(data, dataTitile, LogUtils.infoColor)
  }

  /**
   * logSuccess成功信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @example
   * LogUtils.logInfo('date', 'logSuccess')
   */
  static logSuccess (data: any, dataTitile: string = '[d-utils] log_utils success => '): void {
    LogUtils.console(data, dataTitile, LogUtils.successColor)
  }

  /**
   * logError失败信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @example
   * LogUtils.logInfo('date', 'logError')
   */
  static logError (data: any, dataTitile: string = '[d-utils] log_utils error => '): void {
    LogUtils.console(data, dataTitile, LogUtils.errorColor)
  }

  /**
   * logWarning警告信息
   * @param { any } data  打印的数据信息
   * @param { string } dataTitile  提示文案
   * @example
   * LogUtils.logInfo('date', 'logWarning')
   */
  static logWarning (data: any, dataTitile: string = '[d-utils] log_utils warning => '): void {
    LogUtils.console(data, dataTitile, LogUtils.warningColor)
  }

  /**
   * @description console的美化样式
   * @param { String } text 内容
   * @param { Object } options 配置项，对象，大小背景，和背景颜色设置
   * @property { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
   * @property { Array } colors 背景色列表，是一个从左向右渐变的过程
   * @example
   * LogUtils.logBeauty('hello world')
   * @example
   * LogUtils.logBeauty('这是一个console的方法，可以设置背景色的哦', {
   *  isMax: false,
   *  colors: ['#fa709a', '#fee140', '#ffb199']
   * })
   */
  static logBeauty (text: string = '未曾遗忘的青春', options?: LogUtilsType.ILogBeautyOptions): void {
    if (options && typeof options !== 'object') throw new TypeError(`options is an object, but found ${typeof options}`)
    let data = {
      isMax: false,
      colors: ['#a18cd1', '#fbc2eb', '#8ec5fc']
    }
    let opt = Object.assign({}, data, options)
    if (opt.isMax) {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:20px 40px;color:#fff;font-size:18px;`)
    } else {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:2px 5px;color:#fff;font-size:12px;`)
    }
  }

  /**
   * log打印一个group组  默认全部展示折叠
   */
  static group (dataTitile: string = '[d-utils] log_utils group => ', color: string = LogUtils.defaultColor): void {
    console.group(`%c${dataTitile}`, `color: ${color}; font-weight: bold`)
  }

  /**
   * log打印一个group组  折叠的
   */
  static groupCollapsed (dataTitile: string = '[d-utils] log_utils group_collapsed => ', color: string = LogUtils.defaultColor): void {
    console.groupCollapsed(`%c${dataTitile}`, `color: ${color}; font-weight: bold`)
  }

  /**
   * 关闭一个console.group
   */
  static groupEnd (): void {
    console.groupEnd()
  }

  /**
   * 打印一个table的表格数据
   * @param data 数组对象数据
   */
  static table (data: any[]): void {
    console.table(data)
  }
}
