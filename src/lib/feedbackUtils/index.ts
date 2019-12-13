/**
 * 反馈工具类
 */
import {GenericType} from './../type'
import {addClass} from './../domUtils/index'

/**
 * @description 浏览器提示
 * @param { object } options?  参数为对象，以下都是对象内的属性配置
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
 *  logo: 'http://static.huadong.uniqorn.com.cn/js/utils/5deb72135a682e007c405d87.png'
 * }
 * notification(data)
 */
export function notification(options?: { icon: string; title: string; body: string; click: () => void }): Promise<any> {
  const defaultV = {
    title: '疏影横斜水清浅',
    body: '暗香浮动月黄昏',
    icon: 'http://static.huadong.uniqorn.com.cn/js/utils/5deb72135a682e007c405d87.png',
    show: () => {
    },
    click: () => {
    }
  }
  let newOpt = Object.assign({}, defaultV, options)
  if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(function () {
      let n = new Notification(newOpt.title, {
        body: newOpt.body,
        icon: newOpt.icon,
      })
      n.onshow = function () {
        newOpt.show()
      }
      n.onclick = function () {
        newOpt.click()
      }
    })
    return Promise.resolve(newOpt)
  } else {
    return Promise.reject(newOpt)
  }
}

/**
 * Toast 封装
 * @param msg 提示的内容
 * @param duration 时间 默认3秒
 * @constructor
 */
export function Toast(msg: string, duration?: number): void {
  duration = isNaN(duration) ? 3000 : duration;
  var m = document.createElement('div');
  m.innerHTML = msg;
  m.style.cssText = "font-size: .32rem;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;border-radius: 4px;position: fixed;top: 50%;left: 50%;text-align: center;  transform: translate(-50%, -50%);  max-width: 90vm;word-break: break-all;z-index: 2;";
  document.body.appendChild(m);
  setTimeout(function () {
    var d = 0.5;
    m.style.opacity = '0';
    setTimeout(function () {
      document.body.removeChild(m)
    }, d * 1000);
  }, duration);
}

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
export class Loading {
  private ele: HTMLDivElement;
  private static ele: HTMLDivElement;

  constructor() {
    this.ele
  }

  static show(param?: any): void {
    this.ele ? document.body.removeChild(this.ele) && Loading._init(param) : Loading._init(param)
  }

  static clear(): void {
    this.ele.style.display = 'none'
  }

  static _init(param?: any): void {
    console.log('start init')
    var isParamspinner = param && typeof (param.spinner) === 'object'
    var color = isParamspinner ? param.spinner.color || '#fff' : '#fff'
    var bColor = isParamspinner ? param.spinner.bColor || '#000' : '#000'
    var duration = isParamspinner ? param.spinner.duration || '.8' : '.8'
    var m = document.createElement('div');
    addClass(m, 'mUtilsLoading')
    m.style.cssText = "font-size: .32rem;color: #fff;background-color: rgba(0, 0, 0, 0.6);padding: 20px;border-radius: 4px;position: fixed;top: 50%;left: 50%;width: auto;max-width: 80%;text-align: center;  transform: translate(-50%, -50%);z-index: 2;display: block;";
    var spinner = {
      point: `
    <svg version="1.1" x="0px" y="0px"
   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
  <path opacity="0.4" fill="${bColor}" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
  <path fill="${color}" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 20 20"
      to="360 20 20"
      dur="${duration}s"
      repeatCount="indefinite"/>
    </path>
  </svg>
  `,
      line: `  <svg version="1.1"  x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="${color}" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="${duration}s"
      repeatCount="indefinite"/>
    </path>
  </svg>`
    }
    m.innerHTML = spinner[isParamspinner ? param.spinner.name || 'point' : 'point']
    if (param && param.message) {
      var t = document.createElement('div');
      t.innerHTML = param.message;
      t.style.cssText = `font-size: .32rem;color:${param.messageColor}`;
      m.appendChild(t)
    }
    document.body.appendChild(m);
    this.ele = m
  }

}
