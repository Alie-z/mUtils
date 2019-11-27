import './style.scss'
/**
 * @author ifmiss
 * @version 1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './lib/dom.js'
// 工具类
import utils from './lib/utils.js'
// 数据存储类
import store from './lib/store.js'
// 验证类
import exp from './lib/exp.js'
// 设备信息类
import device from './lib/device.js'

const D_JS_UTILS = {
  store,
  dom,
  utils,
  exp,
  device
}
window.Dutils = D_JS_UTILS

export default D_JS_UTILS