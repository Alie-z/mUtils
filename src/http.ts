import {RequestUtils} from './lib/index'

// console.log(RequestUtils)

class Api1 extends RequestUtils {
  constructor(params: { baseURL: string; }) {
    super(params)
  }

  /**
   * 获取详情
   * @returns {*}
   * @private
   */
  _getDetail(data: { id: string; }) {
    // @ts-ignore
    return this._init('duanzi/detail', data)
  }


  _init(url: string, data: { id: string; }, method: undefined, isNoLoading = true) {
    const params = {
      url,
      data,
      method,
      isNoLoading,
    }
    return this.$http(params)
  }
}

const params = {
  baseURL: 'https://www.uniqorn.vip/api/',
}
const API = new Api1(params)

async function Apidemo() {
  const res = await API._getDetail({id: '74501'})
  // const res = await API._getIns({})
  console.log(res.id)
}

Apidemo()
