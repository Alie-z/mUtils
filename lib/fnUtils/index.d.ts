/**
 * 方法相关
 */
/**
 * @description 方法的从右往左执行
 * @param { Function } fns 各种方法
 * @example
 * compose(a, b, c) // a, b, c 皆为方法
 */
export declare function compose(...fns: Function[]): (x: any) => any;
