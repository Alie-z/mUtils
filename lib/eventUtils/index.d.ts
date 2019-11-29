/**
 * 一个简单的发布订阅者模式
 */
export default class EventUtils {
    /**
     * 键值对 对应事件名称以及数组的值
     */
    static handler: {};
    /**
     * on 方法 添加监听事件
     */
    static on(name: string, handler: Function): EventUtils;
    /**
     * off 方法 移除监听事件
     */
    static off(name: string, handler: Function): EventUtils;
    /**
     * emit 方法 触发监听的事件
     */
    static emit(name: string, ...args: any): EventUtils;
    /**
     * once 方法 添加事件 只会被执行一次
     */
    static once(name: string, handler: Function): void;
}
