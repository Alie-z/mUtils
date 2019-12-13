/**
 * axios 二次封装
 *  @param { object }params 参数合集
 *  @param { string }baseURL axios 请求的默认域名
 *  @param { string || number }timeout 请求超时时间
 *  @param { object }header 自定义header 默认为'content-type': 'application/x-www-form-urlencoded'
 *  @param { function }loadingStar 自定义loading 开始
 *  @param { function }loadingEnd 自定义loading 结束 loadingStar传了的情况必需传
 *  如过cookie里存了token 会自动获取并加入到请求参数中
 */
declare class Http {
    private header;
    private readonly timeout;
    private readonly baseURL;
    private readonly loadingStar;
    private readonly loadingEnd;
    constructor(params?: any);
    /**
     * 创建一个错误
     * @param msg
     */
    private errorCreate;
    /**
     * 记录和显示错误
     * @param error
     */
    errorLog(error: any): void;
    /**
     * 初始化axios的基础信息以及 axios的响应拦截的操作
     * 返回一个axios对象
     */
    createService(): any;
    /**
     * 封装
     * @param params 请求的参数
     * @param url 请求url
     * @param data 接口参数
     * @param method 接口方法（默认为get）
     * @param isNoLoading 是否需要loading
     * @return { Promise }
     */
    $http(params: any): Promise<any>;
}
export default Http;
