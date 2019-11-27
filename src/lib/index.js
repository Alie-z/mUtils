/**
 * @author ifmiss
 * @version 1.0.9
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './dom.js'
// 工具类
import utils from './utils.js'
// 数据存储类
import store from './store.js'
// 验证类
import exp from './exp.js'
// 设备信息类
import device from './device.js'

const D_JS_UTILS = {
  store,
  dom,
  utils,
  exp,
  device
}
export default D_JS_UTILS
