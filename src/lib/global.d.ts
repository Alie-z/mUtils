declare module 'weixin-js-sdk'
declare module 'axios'

interface Window {
  Notification: any
  __D_UTILS_WX_FIRST_URL_HOOK__: any
  Dutils: any
}

interface Document {
  mozCancelFullScreen: any
  msExitFullscreen: any
  webkitCancelFullScreen: any
  msExiFullscreen: any
  webkitExitFullscreen: any
}
