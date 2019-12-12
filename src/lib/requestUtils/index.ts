import axios from 'axios'
import {getCookie} from '../storeUtils/index'
import LogUtils from './../logUtils/index'
import {Toast, Loading} from './../feedbackUtils/index'

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
class Http {
  private header: any | HTMLElement;
  private readonly timeout: number | any | ProgressEvent<XMLHttpRequestEventTarget>;
  private readonly baseURL: string;
  private readonly loadingStar: any;
  private readonly loadingEnd: any;

  constructor(params?: any) {
    this.baseURL = params.baseURL
    this.timeout = params.timeout
    this.header = params.header
    this.loadingStar = params.loadingStar
    this.loadingEnd = params.loadingStar
  }

  /**
   * 创建一个错误
   * @param msg
   */
  private errorCreate(msg: any): void {
    const error = new Error(msg)
    this.errorLog(error)
    throw error
  }

  /**
   * 记录和显示错误
   * @param error
   */
  errorLog(error: any): void {
    // 打印到控制台
    if (process.env.NODE_ENV === 'development') {
      LogUtils.logError('>>>>>> Error >>>>>>', error)
    }
    // 显示提示
    Toast(error.message, 5000)
  }

  /**
   * 初始化axios的基础信息以及 axios的响应拦截的操作
   * 返回一个axios对象
   */
  createService() {
    const service = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout || 5000 // 请求超时时间
    })

// 请求拦截器
    service.interceptors.request.use(
      config => {
        // 在请求发送之前做一些处理
        // const token = util.cookies.get('token')
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        // config.headers['X-Token'] = token
        return config
      },
      error => {
        // 发送失败
        LogUtils.logError('>>>>>> Error >>>>>>', error)
        Promise.reject(error)
      }
    )

// 响应拦截器
    service.interceptors.response.use(
      response => {
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const {code} = dataAxios
        // 根据 code 进行判断
        if (code === undefined) {
          // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
          return dataAxios
        } else {
          // 有 code 代表这是一个后端接口 可以进行进一步的判断
          switch (code) {
            case 200:
              // [ 示例 ] code === 0 代表没有错误
              return dataAxios.data
            case -403:
              Toast('未登录，请先登录！')
              break
            default:
              // 不是正确的 code
              this.errorCreate(`${dataAxios.msg}: ${response.config.url}`)
              break
          }
        }
      },
      error => {
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = '请求错误'
              break
            case 401:
              error.message = '未授权，请登录'
              break
            case 403:
              error.message = '拒绝访问'
              break
            case 404:
              error.message = `请求地址出错: ${error.response.config.url}`
              break
            case 408:
              error.message = '请求超时'
              break
            case 500:
              error.message = '服务器内部错误'
              break
            case 501:
              error.message = '服务未实现'
              break
            case 502:
              error.message = '网关错误'
              break
            case 503:
              error.message = '服务不可用'
              break
            case 504:
              error.message = '网关超时'
              break
            case 505:
              error.message = 'HTTP版本不受支持'
              break
            default:
              break
          }
        }
        this.errorLog(error)
        return Promise.reject(error)
      }
    )
    return service
  }

  /**
   * 封装
   * @param params 请求的参数
   * @param url 请求url
   * @param data 接口参数
   * @param method 接口方法（默认为get）
   * @param isNoLoading 是否需要loading
   * @return { Promise }
   */
  $http(params: any): Promise<any> {
    const service = this.createService()
    const token = getCookie('token')
    if (token) params.data.token = token

    return new Promise((resolve, reject) => {
      !params.isNoLoading && this.loadingStar ?
        this.loadingStar() :
        Loading.show({
          message: '加载中...'
        })
      service({
        method: params.method || 'get',
        url: params.url,
        header: Object.assign({}, {
          'content-type': 'application/x-www-form-urlencoded'
        }, this.header),
        params: params.data || {}
      }).then((res) => {
        LogUtils.group(`[mUtils] http_request 请求成功 => ${params.url}`)
        LogUtils.logInfo(res, `http_request data => `)
        LogUtils.groupEnd()
        resolve(res)
      }).catch(e => {
        LogUtils.group(`[mUtils] http_request 请求失败 =>`)
        LogUtils.logError(e, `http_request error => `)
        LogUtils.groupEnd()
        reject(e)
      }).finally(() => {
        this.loadingEnd ? this.loadingEnd() : Loading.clear()
      })
    })
  }
}

export default Http
