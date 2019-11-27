const dom = {
  /**
	 * @description 判断元素是否存在某个class类
	 * @param { Element } el dom元素
	 * @param { String } className class名称
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_dom?id=hasclass
   * @example
   * Dutils.dom.hasClass(document.body, 'd-js-utils')
	 */
  hasClass(el, className) {
    return el.classList.contains(className)
  },

  /**
	 * @description 元素添加class
	 * @param { Element } el dom元素
	 * @param { (String | Array) } className class名称，可以是多个
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_dom?id=addclass
   * @example
   * Dutils.dom.addClass(document.body, 'd-js-utils')
	 */
  addClass(el, className) {
    if (Array.isArray(className)) {
      className.forEach(item => {
        if (!dom.hasClass(el, item)) {
          el.classList.add(item)
        }
      })
      return
    }
    if (!dom.hasClass(el, className)) {
      el.classList.add(className)
    }
  },

  /**
   * @description 元素删除class
   * @param { Element } el dom元素
   * @param { (String | Array) } className class名称，可以是多个
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_dom?id=rmclass
   * @example
   * Dutils.dom.rmClass(document.body, 'd-js-utils')
   */
  rmClass(el, className) {
    if (Array.isArray(className)) {
      className.forEach(item => {
        if (dom.hasClass(el, item)) {
          el.classList.remove(item)
        }
      })
      return
    }
    if (dom.hasClass(el, className)) {
      el.classList.remove(className)
    }
  },
  
  /**
   * @description 获取元素的css属性内容
   * @param { Element } el dom元素
   * @param { String } cssProp css的属性名称
   * @return { String } css对应的属性的值
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_dom?id=getcomputedstyle
   * @example
   * Dutils.dom.getComputedStyle(document.body, 'width')
   */
  getComputedStyle (el, cssProp) {
    if (!el) throw new Error('dom元素不存在')
    if (!cssProp) throw new Error('请输入需要查询的css属性名称')
    return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(el, false)[cssProp] : el.currentStyle[cssProp]
  },

  /**
   * @description js设置元素的filter样式
   * @param { Element } el dom元素
   * @param { (String | Object) } type filter类型   blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow, 当type为Object的时候就是显示一系列键值对，设置多个filter属性
   * @param { (String | Number) } option 参数 10px  10% 等等，根据不同type的类型设定不同的参数配置
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_dom?id=cssfilter
   * @example
   * // 单个filter属性传参数
   * Dutils.dom.cssFilter(document.body, 'grayscale', 1)
   * // 多个filter属性传参数
   * D_JS_UTILS.dom.cssFilter(document.body, {
   *   grayscale: 0.5,
   *   opacity: 0.7,
   *   'hue-rotate': '90deg'
   * })
   */
  cssFilter(el, type, option) {
    if (typeof type === 'object' && !option) {
      let cssText = ''
      for (let k in type) {
        if (type.hasOwnProperty(k)) {
          cssText+= `${k}(${type[k]})`
        }
      }
      el.style.filter = cssText
      el.style.webkitFilter = cssText
      return
    }
    el.style.filter = `${type}(${option})`
    el.style.webkitFilter = `${type}(${option})`
  }
}

export default dom