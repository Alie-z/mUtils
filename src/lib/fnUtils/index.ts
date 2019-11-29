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
  * compose(full, testCompose)('d-utils', 1)
  * 
  * // this name is:  d-utils
  * // this age is:  1
  * // this is full: d-utils & 1
  */
 export function compose (...fn: Function[]) {
  return function (...args: any) {
    return fn.reduceRight((prevResult, currentFn) => {
      return currentFn.call(this, ...prevResult)
    }, args)
  }
}

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
export function curry (fn: Function): any {
  const _this = this
  const args = Array.from(arguments).slice(1)
  // fn.length 属性指明函数的形参个数。
  const len = fn.length

  return function () {
    const _args = Array.from(arguments)
    args.push(..._args)
    if (args.length < len) {
      return curry.call(_this, fn, ...args)
    }

    return fn.apply(_this, args)
  }
}
