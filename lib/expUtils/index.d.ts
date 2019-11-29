/**
 * @description 浏览器 信息 window.navigator.userAgent
 */
export declare const ua: string;
/**
 * @description 正则表达式 判断是否为移动设备
 */
export declare const EXP_MOBILE: RegExp;
/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 * @example
 * isMobile() // false
 */
export declare function isMobile(): boolean;
/**
 * @description 正则表达式 判断是否为IOS设备
 */
export declare const EXP_IOS: RegExp;
/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 * @example
 * isIOS() // false
 */
export declare function isIOS(): boolean;
/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 * @example
 * isAndroid() // false
 */
export declare function isAndroid(): boolean;
/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export declare const EXP_PHONE_NUM: RegExp;
/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
export declare function isPhoneNum(num: string): boolean;
/**
 * @description 正则表达式 邮箱是否合法
 */
export declare const EXP_EMAIL: RegExp;
/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
export declare function isEmail(email: string): boolean;
/**
 * @description 判断当前是否是微信浏览器
 * @return Boolean
 * @example
 * isWeiXin()  // true
 */
export declare function isWeiXin(): boolean;
/**
 * @description 正则表达式是否全部是
 */
export declare const EXP_CHINESE: RegExp;
/**
 * @description 判断字符串是否都是中文
 * @param { String } str
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
export declare function isChinese(str: string): boolean;
/**
 * 判断是否是 Object
 */
export declare function isObject(o: any): boolean;
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
export declare function isEmptyObject(obj: any): boolean;
/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
export declare function isEmptyStr(str: any): boolean;
