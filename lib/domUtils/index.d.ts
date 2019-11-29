/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export declare function hasClass(el: HTMLElement, className: string): boolean;
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export declare function addClass(el: HTMLElement, className: string | string[]): void;
/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */
export declare function removeClass(el: HTMLElement, className: string | string[]): void;
/**
 * @description 获取元素的css属性内容
 * @param { HTMLElement } el dom元素
 * @param { String } cssProp css的属性名称
 * @return { String } css对应的属性的值
 * @example
 * computedStyle(document.body, 'width')
 */
export declare function computedStyle(el: any, cssProp: string): void;
/**
 * @description js设置元素的filter样式
 * @param { HTMLElement } el dom元素
 * @param { (String | Object) } type filter类型   blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow, 当type为Object的时候就是显示一系列键值对，设置多个filter属性 `blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow
 * @param { (String | Number) } option 参数 10px  10% 等等，根据不同type的类型设定不同的参数配置
 * @example
 * // 单个filter属性传参数
 * cssFilter(document.body, 'grayscale', 1)
 * // 多个filter属性传参数
 * cssFilter(document.body, {
 *   grayscale: 0.5,
 *   opacity: 0.7,
 *   'hue-rotate': '90deg'
 * })
 */
export declare function cssFilter(el: HTMLElement, type: any, option: string | number): void;
