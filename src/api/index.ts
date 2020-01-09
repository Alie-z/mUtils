import Http from 'js-utils-m/lib/requestUtils'
import {Toast} from 'vant';

const params = {
  baseURL: 'http://test.api.uniqorn.com.cn',
  timeout: 6000
}
const newHttp = new Http(params)

class Api {
  /**
   * 获取详情
   * @returns {*}
   * @private
   * @param data
   */
  public _getDetail(data: any) {
    return this._init('duanzi/detail', data)
  }

  /**
   * 获取详情
   * @returns {*}
   * @private
   * @param data
   */
  public _postLogin(data: any) {
    return this._init('admin/login', data, 'post', false)
  }

  public _init(url: string, data: any, method?: string | undefined, isNoLoading: boolean = true): Promise<any> {
    const param = {
      url,
      data,
      method,
      isNoLoading
    }
    return newHttp.$http(param)
  }
}

export default Api
