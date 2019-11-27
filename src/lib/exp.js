/**
 * 校验相关
 */

const exp = {
  /**
   * @description 判断手机格式是否正确
   * @param { String } num 手机号 字符串
   * @return { Boolean } true是有效  false无效
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_exp?id=isphonenum
   * @example
   * Dutils.exp.isPhoneNum('13651971940')   // true
   */
  isPhoneNum (num) {
    const exp = /^1[3-9]\d{9}$/
    const phoneNum = String(num)
    return exp.test(phoneNum)
  },

  /**
   * @description 判断email格式是否正确
   * @param { String } email 邮箱名称 字符串
   * @return { Boolean } true是有效  false无效
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_exp?id=isemail
   * @example
   * Dutils.exp.isEmail('185098535@qq.com')  // true
   */
  isEmail (email) {
    const exp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    const mail = String(email)
    return exp.test(mail)
  },

  /**
   * @description 判断当前是否是微信浏览器
   * @return Boolean
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_exp?id=isweixin
   * @example
   * Dutils.exp.isWeiXin()  // true
   */
  isWeiXin () {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) === 'micromessenger'
  },

  /**
   * @description 判断字符串是否都是中文
   * @param { String } str 
   * @return Boolean
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_exp?id=ischinese
   * @example
   * Dutils.exp.isChinese('你好，世界')  // false
   * Dutils.exp.isChinese('你好')   // true
   * Dutils.exp.isChinese('world')   // false
   */
  isChinese (str) {
    const exp = /^[\u3220-\uFA29]+$/
    return exp.test(String(str))
  },

  /**
   * 初始化类型判断方法
   * 在d-utils被调用的时候自动再exp对象上新增isNull, isUndefined, isObject, isArray, isString, isNumber, isBoolean, isFunction, isRegExp
   * 之后就可以通过Dutils.exp.isUndefined ...这些进行数据格式判断
   */
  initEsDataType () {
    this.dataType = {}
    let type = (o) => {
      let s = Object.prototype.toString.call(o)
      return s.match(/\[object (.*?)\]/)[1].toLowerCase()
    }

    ['Null',
      'Undefined',
      'Object',
      'Array',
      'String',
      'Number',
      'Boolean',
      'Function',
      'RegExp'
    ].forEach(function (t) {
      exp['is' + t] = function (o) {
        return type(o) === t.toLowerCase()
      }
    })
  },

  /**
   * @description 判断对象是否是空对象
   * @param { Object } 传入的对象
   * @return Boolean 是否是空对象
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_exp?id=isemptyobject
   * @example
   * let obj = {
   *   a: 1,
   *   b: 2
   * }
   * let obj1 = {}
   * Dutils.exp.isEmptyObject(obj)   // false
   * Dutils.exp.isEmptyObject(obj1)   // true
   */
  isEmptyObject (obj) {
    if (!exp.isObject(obj)) throw TypeError('参数不是真正的object对象')
    return JSON.stringify(obj) === '{}'
  }
}

// 给exp动态添加数据类型验证方法，这是初始化的操作
exp.initEsDataType()
// 导出
export default exp
