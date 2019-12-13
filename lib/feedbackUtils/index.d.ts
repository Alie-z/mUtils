/**
 * @description 浏览器提示
 * @param { object } options?  参数为对象，以下都是对象内的属性配置
 * @property { String } title 浏览器提示的标题  类似标题
 * @property { String } body 浏览器提示的内容主体  类似正文
 * @property { String } icon 浏览器提示的图标用于  类似logo效果
 * @property { Function } show 浏览器提示的显示的时候执行的方法
 * @property { Function } click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 * @example
 * const data = {
 *  title: 'notification',
 *  body: 'this is a test',
 *  logo: 'http://static.huadong.uniqorn.com.cn/js/utils/5deb72135a682e007c405d87.png'
 * }
 * notification(data)
 */
export declare function notification(options?: {
    icon: string;
    title: string;
    body: string;
    click: () => void;
}): Promise<any>;
/**
 * Toast 封装
 * @param msg 提示的内容
 * @param duration 时间 默认3秒
 * @constructor
 */
export declare function Toast(msg: string, duration?: number): void;
/**
 * Loading 封装
 * @param param 可配置参数
 * @param {param.message} loading 下面的文字
 * @param {param.messageColor} message && message颜色 (默认为 #fff)
 * @param {param.spinner.point} spinner选择点 默认
 * @param {param.spinner.line} spinner选择线
 * @param {param.spinner.bColor} pinner选择点 && 底部轮廓的颜色 (默认为 #000)
 * @param {param.spinner.color} loading的颜色 (默认为 #fff)
 * @param {param.spinner.duration} loading一轮的时间 /s
 * @constructor
 */
export declare class Loading {
    private ele;
    private static ele;
    constructor();
    static show(param?: any): void;
    static clear(): void;
    static _init(param?: any): void;
}
