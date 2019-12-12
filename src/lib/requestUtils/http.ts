import Fetch from './index'

class Api extends Fetch {
  constructor (params) {
    super(params)
  }

  /**
   * 获取详情
   * @returns {*}
   * @private
   */
  _getDetail (data) {
    // @ts-ignore
    return this._init('duanzi/detail', data)
  }


  _init (url, data, method, isNoLoading = true) {
    const params = {
      url,
      data,
      method,
      isNoLoading,
    }
    return this.$http(params)
  }
}

export default Api
