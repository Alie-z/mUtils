/**
 * 通用工具类
 */
import LogUtils from './../logUtils/index'
import { GenericType } from './../type'

/**
 * @description 浏览器提示
 * @param { object } options  参数为对象，以下都是对象内的属性配置
 * @property { String } title 浏览器提示的标题  类似标题
 * @property { String } body 浏览器提示的内容主体  类似正文
 * @property { String } icon 浏览器提示的图标用于  类似logo效果
 * @property { Function } show 浏览器提示的显示的时候执行的方法
 * @property { Function } click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 * @example
 * const data = {
 *  title: 'notification',
 *  body: 'this is a test',
 *  logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
 * }
 * notification(data)
 */
export function notification (options?: GenericType.INotification):Promise<any> {
  const defaultV = {
    title: '未曾遗忘的青春',
    body: 'Hello World !!!',
    icon: 'http://www.daiwei.org/index/images/logo/dw1.png',
    show: () => {},
    click: () => {}
  }
  let newOpt = Object.assign({}, defaultV, options)
  if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(function() {
      let n = new Notification( newOpt.title, {
        body: newOpt.body,
        icon: newOpt.icon,
      })
      n.onshow = function() {
        newOpt.show()
      }
      n.onclick = function() {
        newOpt.click()
      }
    })
    return Promise.resolve(newOpt)
  } else {
    return Promise.reject(newOpt)
  }
}

/**
 * @description 返回rgba随机色
 * @param { Number } opacity    透明度 0～1之间
 * @return { String } rgba色值
 * @example
 * const color = randomColor(1)
 * console(color)
 */
export function randomColor (opacity: number = 1): string {
  const r = ~~(Math.random() * 256)
  const g = ~~(Math.random() * 256)
  const b = ~~(Math.random() * 256)
  return `rgba(${r},${g},${b},${opacity})`
}

/**
 * @description 显示元素的outline出现布局框架
 * @author Addy Osmani
 * @example
 * showLayoutFramework()
 */
export function  layoutFramework (): void {
  Array.from(document.querySelectorAll('*'),function(a: any){  a.style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16) })
}

/**
 * @description 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str  要计算的字符串
 * @param { Boolean } isStrict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @return { Number } 返回字符串长度
 * @example
 * const str = 'd-utils库'
 * console(calcStringLength(str))
 * console(calcStringLength(str, true))
 */
export function calcStringLength (str: string, isStrict?: boolean): number {
  if (typeof str !== 'string') {
    LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] GenericUtils calcStringLength error => ')
    return
  }
  if (!isStrict) return str.length

  return Array.from(str).reduce((total, current) => {
    return total += current.charCodeAt(0) > 255 ? 2 : 1
  }, 0)
}

/**
 * @description 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
 * @return { String } 返回操作之后的字符串
 * @example
 * const str = ' d -js- ut ils '
 * // 0: 去除首尾空格 默认为0
 * strTrim(str)
 * strTrim(str, 0)
 * @example
 * // 1: 去除所有空格
 * strTrim(str, 1)
 * @example
 * // 2: 去除左边空格
 * strTrim(str, 2)
 * @example
 * // 3: 去除右边空格
 * strTrim(str, 3)
 */
export function strTrim (str: string, type: GenericType.StrTrimType = GenericType.StrTrimType.LEFT_RIGHT): string {
  if (typeof str !== 'string') {
    LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] GenericUtils strTrim error => ')
    return
  }
  switch (type) {
  case 0:
    return str.replace(/(^\s*)|(\s*$)/g, '')
  case 1:
    return str.replace(/\s/g, '')
  case 2: 
    return str.replace(/(^\s*)/g, '')
  case 3:
    return str.replace(/(\s*$)/g, '')
  default:
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
}

/**
 * @description 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 * @example
 * // 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
 * window.onresize = throttle(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-throttle', arg)
 * console.log('resize-throttle', arg1)
 * }, 1000)
 */
export function throttle (fn: Function, t = 1000): any {
  if (typeof fn !== 'function') {
    LogUtils.logError(`第一个参数必须是方法`, '[d-utils] GenericUtils throttle error => ')
    return
  }
  const _fn = fn
  let time: any = null
  let first = true
  return function () {
    let arg = arguments
    let _this = this
    if (first) {
      _fn.apply(_this, arg)
      first = false
      return
    }
    if (time) return
    time = setTimeout(function () {
      setTimeout(time)
      time = null
      _fn.apply(_this, arg)
    }, t)
  }
}

/**
 * @description 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 * @example
 * // 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
 * window.onresize = debounce(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-debounce', arg)
 * console.log('resize-debounce', arg1)
 * }, 1000)
 */
export function debounce (fn: Function, t: number, immediate: boolean = true): any {
  if (typeof fn !== 'function') {
    LogUtils.logError(`第一个参数必须是方法`, '[d-utils] GenericUtils debounce error => ')
    return
  }
  let time: any
  //  立刻执行第一次该方法
  if (immediate) {
    return function () {
      clearTimeout(time)
      if (!time) {
        fn.apply(this, arguments)
      }
      time = setTimeout(function () {
        setTimeout(time)
        time = null
      }, t)
    }
  } else {
    // 满足 time 时间结束之后自动执行一次该方法
    return function () {
      clearTimeout(time)
      time = setTimeout(function () {
        setTimeout(time)
        fn.apply(this, arguments)
        time = null
      }, t)
    }
  }
}

/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
 * @example
 * formatDate(`yyyy-MM-dd`, new Date())
 */
export function formatDate (fmt: string, date: any = new Date()): any { // author: meizz
  const newDate = new Date(date)
  let o: any = {
    'M+': newDate.getMonth() + 1, // 月份
    'd+': newDate.getDate(), // 日
    'h+': newDate.getHours(), // 小时
    'm+': newDate.getMinutes(), // 分
    's+': newDate.getSeconds(), // 秒
    'q+': ~~((newDate.getMonth() + 3) / 3), // 季度
    'S': newDate.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

/**
 * @description 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
 * @param { String } str 拷贝的内容
 * @example
 * copyCode('hello world')
 */
export function copyCode (str: string): void {
  const textArea = document.createElement('textarea')
  textArea.style.cssText = 'position: absolute; top: -1000px; right: -1000px; z-index: -1000;'
  document.body.appendChild(textArea)
  textArea.value = str
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

/**
 * @description 字符串转成base64编码
 * @param str 字符串
 * @return str base64 字符串
 */
export function base64Encode (str: string): string {
  return window.btoa(str)
}

/**
 * @description base64解码成字符串
 * @param str base64字符串
 * @return 返回str字符串
 */
export function base64Decode (str: string): string {
  return window.atob(decodeURIComponent(str))
}
