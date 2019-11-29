/**
 * 正则校验类
 */
import LogUtils from './../logUtils/index'
import { checkType } from './../storeUtils/index'

/**
 * @description 浏览器 信息 window.navigator.userAgent
 */
export const ua = window.navigator.userAgent

/**
 * @description 正则表达式 判断是否为移动设备
 */
export const EXP_MOBILE: RegExp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i

/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 * @example
 * isMobile() // false
 */
export function isMobile (): boolean {
  return EXP_MOBILE.test(ua)
}

/**
 * @description 正则表达式 判断是否为IOS设备
 */
export const EXP_IOS: RegExp = /(iPhone|iPad|iPod|iOS)/i

/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 * @example
 * isIOS() // false
 */
export function isIOS (): boolean {
  return EXP_IOS.test(ua)
}

/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 * @example
 * isAndroid() // false
 */
export function isAndroid (): boolean {
  return (!!~ua.indexOf('Android')) ||
         (!!~ua.indexOf('Adr'))
}

/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export const EXP_PHONE_NUM: RegExp = /^1[3-9]\d{9}$/

/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
export function isPhoneNum (num: string): boolean {
  if (typeof num !== 'string') {
    LogUtils.logError(`参数需要为string类型，但是发现为: ${typeof num}`, '[d-utils] ExpUtils isPhoneNum error => ')
    return false
  }
  return EXP_PHONE_NUM.test(num)
}

/**
 * @description 正则表达式 邮箱是否合法
 */
export const EXP_EMAIL: RegExp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/

/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
export function isEmail (email: string): boolean {
  return EXP_EMAIL.test(email)
}

/**
 * @description 判断当前是否是微信浏览器
 * @return Boolean
 * @example
 * isWeiXin()  // true
 */
export function isWeiXin (): boolean {
  const uaLower = ua.toLowerCase()
  return String(uaLower.match(/MicroMessenger/i)) === 'micromessenger'
}

/**
 * @description 正则表达式是否全部是
 */
export const EXP_CHINESE: RegExp = /^[\u3220-\uFA29]+$/

/**
 * @description 判断字符串是否都是中文
 * @param { String } str 
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
export function isChinese (str: string): boolean {
  return EXP_CHINESE.test(str)
}

/**
 * 判断是否是 Object
 */
export function isObject (o: any): boolean {
  return checkType(o) === 'object'
}

/**
  * @description 判断对象是否是空对象
  * @param { Object } 传入的对象
  * @return Boolean 是否是空对象
  * @example
  * let obj = {
  *   a: 1,
  *   b: 2
  * }
  * let obj1 = {}
  * isEmptyObject(obj)   // false
  * isEmptyObject(obj1)   // true
  */
export function isEmptyObject (obj: any): boolean {
  if (!isObject(obj)) {
    LogUtils.logError('参数不是真正的object对象', '[d-utils] ExpUtils isEmptyObject error => ')
    return false
  }
  return Object.keys(obj).length === 0
}

/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
export function isEmptyStr (str): boolean {
  return str.replace(/(^\s*)|(\s*$)/g, '').length === 0
}
