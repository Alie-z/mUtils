import { LogUtilsType } from './../type';
/**
 * 日志的打印封装
 */
export default class LogUtils {
    /**
     * 提示色  '#9E9E9E'   默认灰色
     */
    static defaultColor: string;
    /**
     * 提示色  '#0099FF'   蓝色
     */
    static infoColor: string;
    /**
     * 提示色  '#00CC99'   绿色
     */
    static successColor: string;
    /**
     * 提示色  '#CC3366'   红色
     */
    static errorColor: string;
    /**
     * 提示色  '#CC9966'   黄色
     */
    static warningColor: string;
    /**
     * console提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @param { string } color  颜色
     * @example
     * LogUtils.console(window.screen, 'window:', 'red')
     */
    static console(data: any, dataTitile?: string, color?: string): void;
    /**
     * logDefault提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @example
     * LogUtils.logDefault('date', 'logDefault')
     */
    static logDefault(data: any, dataTitile?: string): void;
    /**
     * logInfo提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @example
     * LogUtils.logInfo('date', 'logInfo')
     */
    static logInfo(data: any, dataTitile?: string): void;
    /**
     * logSuccess成功信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @example
     * LogUtils.logInfo('date', 'logSuccess')
     */
    static logSuccess(data: any, dataTitile?: string): void;
    /**
     * logError失败信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @example
     * LogUtils.logInfo('date', 'logError')
     */
    static logError(data: any, dataTitile?: string): void;
    /**
     * logWarning警告信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @example
     * LogUtils.logInfo('date', 'logWarning')
     */
    static logWarning(data: any, dataTitile?: string): void;
    /**
     * @description console的美化样式
     * @param { String } text 内容
     * @param { Object } options 配置项，对象，大小背景，和背景颜色设置
     * @property { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
     * @property { Array } colors 背景色列表，是一个从左向右渐变的过程
     * @example
     * LogUtils.logBeauty('hello world')
     * @example
     * LogUtils.logBeauty('这是一个console的方法，可以设置背景色的哦', {
     *  isMax: false,
     *  colors: ['#fa709a', '#fee140', '#ffb199']
     * })
     */
    static logBeauty(text?: string, options?: LogUtilsType.ILogBeautyOptions): void;
    /**
     * log打印一个group组  默认全部展示折叠
     */
    static group(dataTitile?: string, color?: string): void;
    /**
     * log打印一个group组  折叠的
     */
    static groupCollapsed(dataTitile?: string, color?: string): void;
    /**
     * 关闭一个console.group
     */
    static groupEnd(): void;
    /**
     * 打印一个table的表格数据
     * @param data 数组对象数据
     */
    static table(data: any[]): void;
}
