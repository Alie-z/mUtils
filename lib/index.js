/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import * as dom from './domUtils/index';
// 工具类
import * as utils from './genericUtils/index';
// 数据存储类
import * as store from './storeUtils/index';
// 验证类
import * as exp from './expUtils/index';
// 设备信息类
import * as device from './deviceUtils/index';
// 微信相关
import weixin from './weixinUtils/index';
// 性能
import performance from './performanceUtils/index';
// 打印
import log from './logUtils/index';
// url相关
import * as url from './urlUtils/index';
// http相关
import http from './httpRequestUtils/index';
// 图片合成操作
import img from './imageUtils/index';
// 装饰器相关
import * as decorator from './decoratorUtils/index';
// event事件
import event from './eventUtils/index';
// promise
import * as promise from './promiseUtils/index';
// function
import * as fn from './fnUtils/index';
/**
 * Dom相关静态类
 */
export const DomUtils = dom;
/**
 * 装饰器
 */
export const DecoratorUtils = decorator;
/**
 * 性能相关静态类
 */
export const PerformanceUtils = performance;
/**
 * 设备相关静态类
 */
export const DeviceUtils = device;
/**
 * 数据存储静态类
 */
export const StoreUtils = store;
/**
 * 日志 打印静态类
 */
export const LogUtils = log;
/**
 * 通用工具静态类
 */
export const GenericUtils = utils;
/**
 * url相关
 */
export const UrlUtils = url;
/**
 * 微信相关
 */
export const WeixinUtils = weixin;
/**
 * 正则相关静态类
 */
export const ExpUtils = exp;
/**
 * axios二次封装
 */
export const HttpRequestUtils = http;
/**
 * 图片合成类
 */
export const ImageUtils = img;
/**
 * 事件相关
 */
export const EventUtils = event;
/**
 * promise相关
 */
export const PromiseUtils = promise;
/**
 * 函数相关
 */
export const FnUtils = fn;
export default {
    /**
     * 装饰器
     */
    DecoratorUtils,
    /**
     * 设备相关
     */
    DeviceUtils,
    /**
     * Dom相关
     */
    DomUtils,
    /**
     * 基本方法
     */
    GenericUtils,
    /**
     * 数据操作方法
     */
    StoreUtils,
    /**
     * 正则判断方法
     */
    ExpUtils,
    /**
     * logger
     */
    LogUtils,
    /**
     * 微信jssdk 封装的方法
     */
    WeixinUtils,
    /**
     * 性能相关监控
     */
    PerformanceUtils,
    /**
     * url相关
     */
    UrlUtils,
    /**
     * 基于axios的请求相关
     */
    HttpRequestUtils,
    /**
     * 图片合成相关
     */
    ImageUtils,
    /**
     * 自定义事件
     */
    EventUtils,
    /**
     * promise封装方法
     */
    PromiseUtils,
    /**
     * 方法的包装
     */
    FnUtils
};
