var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import LogUtils from './../logUtils/index';
require('promise.prototype.finally').shim();
/**
 * 网页请求的操作
 * axios
 */
export default class HttpRequestUtils {
    /**
     * @description 初始化axios的基础信息以及 axios的响应拦截的操作
     * @param fn
     * 方法内部有两个参数，一个是axios，另外一个是 HttpRequestUtils 的class
     * @return { class } HttpRequestUtils 返回一个构造函数
     */
    static init(fn) {
        LogUtils.logInfo('https://github.com/IFmiss/d-utils/blob/typescript/src/lib/httpRequestUtils/axiosConfig.ts', `[d-utils] http_request HttpRequestUtils.init 需要自定义aixos的响应拦截以及基本配置 => `);
        if (fn && typeof fn === 'function') {
            fn.call(null, axios, HttpRequestUtils);
        }
        HttpRequestUtils.isInit = true;
        return HttpRequestUtils;
    }
    /**
     * @description get的请求操作
     * @param { string } url 请求的url
     * @param { object } params 请求的参数
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    static get(url, params, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!HttpRequestUtils.isInit) {
                    LogUtils.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', `[d-utils] http_request: => error`);
                    reject('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作');
                }
                const getInfo = Object.assign({}, { params }, config);
                axios.get(url, getInfo).then((res) => {
                    LogUtils.group(`[d-utils] http_request get 请求成功 => ${url}`, LogUtils.successColor);
                    LogUtils.logInfo(res.data, `http_request response => `);
                    LogUtils.logInfo(res.config, `http_request config => `);
                    LogUtils.logInfo(res.config.params, `http_request params => `);
                    LogUtils.groupEnd();
                    resolve(res);
                }).catch((e) => __awaiter(this, void 0, void 0, function* () {
                    LogUtils.group(`[d-utils] http_request get 请求失败 ${url}`, LogUtils.errorColor);
                    LogUtils.logInfo(e, `http_request error => `);
                    LogUtils.groupEnd();
                    resolve(e);
                }));
            });
        });
    }
    /**
     * @description post的请求操作
     * @param { string } url 请求的url
     * @param { object } data 请求的参数
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    static post(url, data, config) {
        return new Promise((resolve, reject) => {
            if (!HttpRequestUtils.isInit) {
                LogUtils.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', `[d-utils] http_request error => `);
                reject('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作');
            }
            const postInfo = Object.assign({}, { data: data }, config);
            axios.post(url, postInfo).then((res) => {
                LogUtils.group(`[d-utils] http_request post 请求成功 => ${url}`, LogUtils.successColor);
                LogUtils.logInfo(res.data, `http_request response => `);
                LogUtils.logInfo(res.config, `http_request config => `);
                LogUtils.logInfo(res.config.params, `http_request params => `);
                LogUtils.groupEnd();
                resolve(res);
            }).catch((e) => {
                LogUtils.group(`[d-utils] http_request post 请求失败 => ${url}`, LogUtils.errorColor);
                LogUtils.logInfo(e, `http_request error => `);
                LogUtils.groupEnd();
                reject(e);
            });
        });
    }
}
/**
 * 设置默认成功的CODE码
 */
HttpRequestUtils.successCode = 200;
/**
 * 基础url
 */
HttpRequestUtils.baseUrl = '';
/**
 * timeout时长
 */
HttpRequestUtils.timeOut = 15000;
/**
 * 是否初始化了
 */
HttpRequestUtils.isInit = false;
