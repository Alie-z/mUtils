/**
 * 工具类
 * @module utils
 */
const utils = {
  /**
   * @description console的美化样式
   * @param { String } text 内容
   * @param { Object } options 配置项，对象，大小背景，和背景颜色设置
   * @property { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
   * @property { Array } colors 背景色列表，是一个从左向右渐变的过程
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=console
   * @example
   * Dutils.utils.console('hello world')
   * @example
   * Dutils.utils.console('这是一个console的方法，可以设置背景色的哦', {
   *  isMax: false,
   *  colors: ['#fa709a', '#fee140', '#ffb199']
   * })
   */
  console (text = '未曾遗忘的青春', options) {
    if (options && typeof options !== 'object') throw new TypeError(`options is an object, but found ${typeof options}`)
    let data = {
      isMax: true,
      colors: ['#a18cd1', '#fbc2eb', '#8ec5fc']
    }
    let opt = Object.assign({}, data, options)
    if (opt.isMax) {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:20px 40px;color:#fff;font-size:18px;`)
    } else {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:2px 5px;color:#fff;font-size:12px;`)
    }
  },

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
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=notification
   * @example
   * const data = {
   *  title: 'notification',
   *  body: 'this is a test',
   *  logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
   * }
   * Dutils.utils.notification(data)
   */
  notification (options) {
    const defaultV = {
      title: '未曾遗忘的青春',
      body: 'Hello World !!!',
      icon: 'http://www.daiwei.org/index/images/logo/dw1.png',
      show: () => {},
      click: () => {}
    }
    let newOpt = Object.assign({}, defaultV, options)
    return new Promise((resolve, reject) => {
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
        resolve(newOpt)
      } else {
        reject(newOpt)
      }
    })
  },

  /**
   * @description 返回rgba随机色
   * @param { Number } opacity    透明度 0～1之间
   * @return { String } rgba色值
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=randomcolor
   * @example
   * const color Dutils.utils.randomColor(1)
   * Dutils.utils.console(color)
   */
  randomColor (opacity = 1) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r},${g},${b},${opacity})`
  },

  /**
   * @description 显示元素的outline出现布局框架
   * @author Addy Osmani
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=showlayoutframework
   * @example
   * Dutils.utils.showLayoutFramework()
   */
  showLayoutFramework() {
    [].forEach.call( document.querySelectorAll('*'),function(a){  a.style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16) })
  },

  /**
   * @description 返回浏览器url的参数
   * @param { String } url   地址字符串
   * @return { Object } 返回一个参数对象
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=parseurl
   * @example
   * Dutils.utils.parseUrl('www.daiwei.org?name=daiwei&id=123')
   */
  parseUrl (url) {
    if (!url) return
    let newUrl = url.slice(url.indexOf('?'))
    let arr = newUrl.slice(1).split('&')
    let obj = {}
    arr.forEach(item => {
      if (item.split('=')[0]) obj[item.split('=')[0]] = item.split('=')[1]
    })
    return obj
  },

  /**
   * @description 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
   * @param { String } str  要计算的字符串
   * @param { Boolean } isStrict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
   * @return { Number } 返回字符串长度
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=calcstringlength
   * @example
   * const str = 'd-js-utils组件'
   * Dutils.utils.console(Dutils.utils.calcStringLength(str))
   * Dutils.utils.console(Dutils.utils.calcStringLength(str, true))
   */
  calcStringLength (str, isStrict) {
    if (typeof str !== 'string') throw new TypeError (`str must be string but found ${typeof str}`)
    if (!isStrict) return str.length
    let a = 0
    for (let i = 0; i < str.length; i++ ) {
      let count = str.charCodeAt(i) > 255 ? 2 : 1
      a += count
    }
    return a
  },

  /**
   * @description 字符串的去除空格
   * @param { String } str 操作的字符串
   * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
   * @return { String } 返回操作之后的字符串
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=strtrim
   * @example
   * const str = ' d -js- ut ils '
   * // 0: 去除首位空格 默认为0
   * Dutils.utils.strTrim(str)
   * Dutils.utils.strTrim(str, 0)
   * @example
   * // 1: 去除所有空格
   * Dutils.utils.strTrim(str, 1)
   * @example
   * // 2: 去除左边空格
   * Dutils.utils.strTrim(str, 2)
   * @example
   * // 3: 去除右边空格
   * Dutils.utils.strTrim(str, 3)
   */
  strTrim (str, type = 0) {
    if (typeof str !== 'string') throw new TypeError (`str must be string but found ${typeof str}`)
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
  },

  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=throttle
   * @example
   * // 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
   * window.onresize = Dutils.utils.throttle(function () {
   * // es5 获取参数
   * let arg = Array.prototype.slice.call(arguments)
   * // es6 获取参数
   * let arg1 = Array.from(arguments)
   * console.log('resize-throttle', arg)
   * console.log('resize-throttle', arg1)
   * }, 1000)
   */
  throttle (fn, t = 1000) {
    if (typeof fn !== 'function') throw new Error('第一个参数必须是方法')
    let _fn = fn
    let time = null
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
  },

  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
   * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=debounce
   * @example
   * // 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
   * window.onresize = Dutils.utils.debounce(function () {
   * // es5 获取参数
   * let arg = Array.prototype.slice.call(arguments)
   * // es6 获取参数
   * let arg1 = Array.from(arguments)
   * console.log('resize-debounce', arg)
   * console.log('resize-debounce', arg1)
   * }, 1000)
   */
  debounce (fn, t, immediate = true) {
    if (typeof fn !== 'function') throw new Error('第一个参数必须是方法')
    let time
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
  },

  /**
   * @description 日期格式化 可转换成自己想要的格式
   * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
   * @param { Date } date 日期内容  如 当前日期 new Date()
   * @return { String } '2018-08-15 01:46:22'
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=formatdate
   * @example
   * Dutils.utils.formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
   * @example
   * Dutils.utils.formatDate(`yyyy-MM-dd`, new Date())
   */
  formatDate (fmt, date) { // author: meizz
    let newDate = new Date(date)
    var o = {
      'M+': newDate.getMonth() + 1, // 月份
      'd+': newDate.getDate(), // 日
      'h+': newDate.getHours(), // 小时
      'm+': newDate.getMinutes(), // 分
      's+': newDate.getSeconds(), // 秒
      'q+': Math.floor((newDate.getMonth() + 3) / 3), // 季度
      'S': newDate.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length)) }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    }
    return fmt
  },

  /**
   * @description 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
   * @param { String } str 拷贝的内容
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=copycode
   * @example
   * Dutils.utils.copyCode('hello world')
   */
  copyCode (str) {
    let textArea = document.createElement('textarea')
    textArea.style.cssText = 'position: absolute; top: -1000px; right: -1000px; z-index: -1000;'
    document.body.appendChild(textArea)
    textArea.value = str
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  },

  /**
   * @description 设置元素在网页中全屏
   * @support 兼容性支持 ie11及以上, firefox 10+, chrome 15+, safari 5.1+, opera 12.1+
   * @param { element } ele  需要全屏的元素
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=openfullscreen
   * @example
   * Dutils.utils.openFullScreen(document.querySelector('video'))
   */
  openFullScreen (ele) {
    if (ele.requestFullscreen) {
      ele.requestFullscreen()
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen()
    } else if (ele.msRequestFullscreen) {
      ele.msRequestFullscreen()
    } else if (ele.webkitRequestFullscreen) {
      ele.webkitRequestFullScreen()
    }
  },

  /**
   * @description 关闭网页全屏操作
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=exitfullscreen
   * @example
   * Dutils.utils.exitFullScreen()
   */
  exitFullScreen () {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExiFullscreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  },

  /**
   * @description 返回页面加载的相关信息
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=performance
   * @returns { Object }  data 返回一个对象
   * @returns { Object }  data.timing       全局数据 window.performance.timing
   * @returns { number }  data.dnsT         DNS查询耗时
   * @returns { number }  data.loadT        白屏时间
   * @returns { number }  data.requestT     request请求耗时
   * @returns { number }  data.tcpT         TCP链接耗时
   * @returns { number }  data.renderDomT   解析dom树耗时
   * @returns { number }  data.readyDomT    domready时间(用户可操作时间节点) 
   * @returns { number }  data.onLoadT      onload时间(总下载时间)
   * @example
   * Dutils.utils.performance()
   */
  performance () {
    const { timing } = window.performance
    return {
      // 全局数据, 返回的是一个对象
      timing: timing,
      // DNS查询耗时
      dnsT: timing.domainLookupEnd - timing.domainLookupStart,
      // 白屏时间
      loadT: timing.domLoading - timing.navigationStart,
      // request请求耗时
      requestT: timing.responseEnd - timing.responseStart,
      // TCP链接耗时
      tcpT: timing.connectEnd - timing.connectStart,
      // 解析dom树耗时
      renderDomT: timing.domComplete - timing.domInteractive,
      // domready时间(用户可操作时间节点) 
      readyDomT: timing.domContentLoadedEventEnd - timing.navigationStart,
      // onload时间(总下载时间)
      onLoadT: timing.loadEventEnd - timing.navigationStart
    }
  },

  /**
   * @description 移动端REM的初始化js的方法，默认基于750的设计稿，限制的区间为 320-414，页面的总宽度为7.5rem，所有的基于750的设计稿的宽度为 px / 100 的结果，单位为rem
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=initRem
   * @param { number }  BaseWidth   基础的设计稿宽度        默认750
   * @param { number }  MinWidth    移动端最小比例的宽度点   默认320
   * @param { number }  MaxWidth    移动端最大的比例宽度点   默认414
   * @example
   * Dutils.utils.initRem()
   */
  initRem (BaseWidth = 750, MinWidth = 320, MaxWidth = 414) {
    const r = {}
    const MinWidthP = MinWidth / BaseWidth
    const MaxWidthP = MaxWidth / BaseWidth

    r.Html = document.getElementsByTagName('html')[0]
    
    r.intiFontSize = function () {
      let p = parseFloat((window.innerWidth / BaseWidth).toFixed(4))
      const s = (p = p > MaxWidthP ? MaxWidthP : p) < MinWidthP ? MinWidthP : p
      return s
    }
    
    r.updateFontSize = function () {
      r.Html.setAttribute('style', 'font-size:' + r.intiFontSize() * 100 + 'px')
    }

    if (!document.addEventListener) return

    window.addEventListener('resize', r.updateFontSize, false)
    document.addEventListener('DOMContentLoaded', r.updateFontSize, false)
  }
}

export default utils
