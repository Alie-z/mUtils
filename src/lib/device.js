const ua = window.navigator.userAgent
const device = {
  /**
   * @description 判断是否是移动端
   * @return { Boolean } 返回是否是移动端的布尔值
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=ismobile
   * @example
   * Dutils.device.isMobile() // false
   */
  isMobile () {
    const EXP_ISMOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    return EXP_ISMOBILE.test(ua)
  },

  /**
   * @description 判断是否是IOS操作系统
   * @return { Boolean } 返回是否是IOS的布尔值
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isios
   * @example
   * Dutils.device.isIOS() // false
   */
  isIOS () {
    const EXP_IOS = /(iPhone|iPad|iPod|iOS)/i
    return EXP_IOS.test(ua)
  },

  /**
   * @description 判断是否是Android操作系统
   * @return { Boolean } 返回是否是Android的布尔值
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isandroid
   * @example
   * Dutils.device.isAndroid() // false
   */
  isAndroid () {
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  },

  /**
   * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
   * @param { String } 提示内容
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=checklayoutorientation
   * @example
   * Dutils.device.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
   * @example
   * Dutils.device.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
   */
  checkLayoutOrientation (text = '请旋转屏幕，以达到更好的浏览效果') {
    if (!window.hasOwnProperty('orientation')) return
    let ele = null
    // 0 和 360 的时候是竖屏
    function initOrientation () {
      let ori = window.orientation
      if (ori === 0 || ori === 360) {
        if (ele) {
          document.body.removeChild(ele)
          ele = null
        }
      } else {
        initTipInfo()
      }
    }
    function initTipInfo () {
      ele = document.createElement('div')
      ele.style.cssText = `position: fixed;
                           top: 0;
                           left: 0;
                           right:0;
                           bottom:0;
                           display:flex;
                           align-items:center;
                           justify-content:center;
                           font-size: 20px;
                           background:#fff;
                           z-index: 19940320;
                           padding: 40px;`
      ele.innerText = text
      document.body.appendChild(ele)
    }
    function initEvent () {
      window.addEventListener('orientationchange', () => {
        initOrientation()
      })
    }
    initOrientation()
    initEvent()
  }
}
export default device
