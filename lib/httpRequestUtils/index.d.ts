/**
 * 网页请求的操作
 * axios
 */
export default class HttpRequestUtils {
    /**
     * 设置默认成功的CODE码
     */
    static successCode: number;
    /**
     * 基础url
     */
    static baseUrl: string;
    /**
     * timeout时长
     */
    static timeOut: number;
    /**
     * 是否初始化了
     */
    private static isInit;
    /**
     * @description 初始化axios的基础信息以及 axios的响应拦截的操作
     * @param fn
     * 方法内部有两个参数，一个是axios，另外一个是 HttpRequestUtils 的class
     * @return { class } HttpRequestUtils 返回一个构造函数
     */
    static init(fn?: Function): HttpRequestUtils;
    /**
     * @description get的请求操作
     * @param { string } url 请求的url
     * @param { object } params 请求的参数
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    static get(url: string, params?: any, config?: any): Promise<any>;
    /**
     * @description post的请求操作
     * @param { string } url 请求的url
     * @param { object } data 请求的参数
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    static post(url: string, data?: any, config?: any): Promise<any>;
}
