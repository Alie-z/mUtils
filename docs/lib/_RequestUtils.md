# HttpRequestUtils 类
RequestUtils 基于 axios的二次封装
 - 该方法为class类，使用时需一个新class继承该方法
#### 参数
`params`: 

```js
/**
 * axios 二次封装
 *  @param { object }params 参数合集
 *  @param { string }baseURL axios 请求的默认域名
 *  @param { string || number }timeout 请求超时时间
 *  @param { object }header 自定义header 默认为'content-type': 'application/x-www-form-urlencoded'
 *  @param { function }loadingStar 自定义loading 开始
 *  @param { function }loadingEnd 自定义loading结束 loadingStar传了的情况必需传
 *  如过cookie里存了token 会自动获取并加入到请求参数中
 */
```

#### `Demo 以vue中使用为例`:
##### 1. /src/api/api.js
```javascript
import {RequestUtils} from 'js-utils-m'

class Api extends RequestUtils {
  constructor (params) {
    super(params)
  }

  /**
   * 获取详情
   * @param { object } 参数合集
   * @returns {*}
   * @private
   */
  _getDetail (data) {
    return this._init('duanzi/detail', data)
  }

  /**
   * 上传图片
   * isNoLoading 为true 表示需要loading
   * @returns {*}
   * @private
   */
  _postUpimg (data) {
    return this._init('admin/imgup', data, 'post', true)
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

```
##### 2. /src/main.js
```javascript
import { Toast } from 'vant'
import Api from './api/api'
const params = {
  baseURL: 'https://www.xxxx.com/api/',
  timeout: 6000,
  loadingStar: Toast.loading({   //自定义loading
    duration: 0,
    forbidClick: true,
    message: 'loading...'
  }),
  loadingEnd: Toast.clear()
}
Vue.prototype.API = new Api(params)
```

##### 2. /src/view/request.vue
```javascript
<script>
  export default {
    data () {
      return {
        videoId: this.$route.query.vid
      }
    },
    mounted () {
      this._renderVideoInfo()
    },
    methods: {
      async _renderVideoInfo () {
        let res = await this.ApiN._getVideoInfo({ videoId: this.videoId })
        console.log(res)
      }
  }
  }
</script>
```

