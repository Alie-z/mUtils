/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
import * as dom from './domUtils/index';
import * as utils from './genericUtils/index';
import * as store from './storeUtils/index';
import * as exp from './expUtils/index';
import * as device from './deviceUtils/index';
import weixin from './weixinUtils/index';
import performance from './performanceUtils/index';
import log from './logUtils/index';
import * as url from './urlUtils/index';
import http from './httpRequestUtils/index';
import img from './imageUtils/index';
import * as decorator from './decoratorUtils/index';
import event from './eventUtils/index';
import * as promise from './promiseUtils/index';
import * as fn from './fnUtils/index';
/**
 * Dom相关静态类
 */
export declare const DomUtils: typeof dom;
/**
 * 装饰器
 */
export declare const DecoratorUtils: typeof decorator;
/**
 * 性能相关静态类
 */
export declare const PerformanceUtils: typeof performance;
/**
 * 设备相关静态类
 */
export declare const DeviceUtils: typeof device;
/**
 * 数据存储静态类
 */
export declare const StoreUtils: typeof store;
/**
 * 日志 打印静态类
 */
export declare const LogUtils: typeof log;
/**
 * 通用工具静态类
 */
export declare const GenericUtils: typeof utils;
/**
 * url相关
 */
export declare const UrlUtils: typeof url;
/**
 * 微信相关
 */
export declare const WeixinUtils: typeof weixin;
/**
 * 正则相关静态类
 */
export declare const ExpUtils: typeof exp;
/**
 * axios二次封装
 */
export declare const HttpRequestUtils: typeof http;
/**
 * 图片合成类
 */
export declare const ImageUtils: typeof img;
/**
 * 事件相关
 */
export declare const EventUtils: typeof event;
/**
 * promise相关
 */
export declare const PromiseUtils: typeof promise;
/**
 * 函数相关
 */
export declare const FnUtils: typeof fn;
declare const _default: {
    /**
     * 装饰器
     */
    DecoratorUtils: typeof decorator;
    /**
     * 设备相关
     */
    DeviceUtils: typeof device;
    /**
     * Dom相关
     */
    DomUtils: typeof dom;
    /**
     * 基本方法
     */
    GenericUtils: typeof utils;
    /**
     * 数据操作方法
     */
    StoreUtils: typeof store;
    /**
     * 正则判断方法
     */
    ExpUtils: typeof exp;
    /**
     * logger
     */
    LogUtils: typeof log;
    /**
     * 微信jssdk 封装的方法
     */
    WeixinUtils: typeof weixin;
    /**
     * 性能相关监控
     */
    PerformanceUtils: typeof performance;
    /**
     * url相关
     */
    UrlUtils: typeof url;
    /**
     * 基于axios的请求相关
     */
    HttpRequestUtils: typeof http;
    /**
     * 图片合成相关
     */
    ImageUtils: typeof img;
    /**
     * 自定义事件
     */
    EventUtils: typeof event;
    /**
     * promise封装方法
     */
    PromiseUtils: typeof promise;
    /**
     * 方法的包装
     */
    FnUtils: typeof fn;
};
export default _default;
