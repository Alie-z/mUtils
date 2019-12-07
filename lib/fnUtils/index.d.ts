/**
 * 方法相关
 */
/**
 * @description 方法的从右往左执行
 * @param { Function } fns 各种方法
 * @example
 * compose(a, b, c)(...query) // a, b, c 皆为方法
 *
 * const testCompose = (name, age) => {
 *   console.log('this name is: ', name)
 *   console.log('this age is: ', age)
 *   // 如果方法内部返回多个值作为后一个方法的参数，使用数组返回
 *   return [name, age]
 * }
 * const full = (name, age) => {
 *   console.log(`this is full: ${name} & ${age}`)
 * }
 *
 * compose(full, testCompose)('mUtils', 1)
 *
 * // this name is:  mUtils
 * // this age is:  1
 * // this is full: mUtils & 1
 */
export declare function compose(...fn: Function[]): (...args: any) => any;
/**
 * @description 函数柯里化工具
 * @param { Function } fn 方法
 * @param { Any } agrs 参数，可选
 * @example
 * const addCur = function (a, b, c) {
 *   console.log('a + b + c', a + b + c)
 * }
 * const reduceCur = function (a, b, c) {
 *   console.log('a - b - c', a - b - c)
 * }
 * const add = curry(addCur, 2)
 * s(1)(2)   // a + b + c 6
 * s(1, 3)   // a + b + c 6
 *
 * const reduce = curry(reduceCur)
 * const reduce1 = curry(reduceCur)
 * reduce(1)(2)(3)    // a - b - c -1
 * reduce1(1, 2, 3)    // a - b - c -3
 */
export declare function curry(fn: Function): any;
