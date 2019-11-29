/**
 * 设备相关
 */
/**
 * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
 * @param { String } 提示内容
 * @example
 * DeviceUtils.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
 * @example
 * DeviceUtils.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
 */
export function checkLayoutOrientation(text = '请旋转屏幕，以达到更好的浏览效果') {
    if (!window.hasOwnProperty('orientation'))
        return;
    let ele = null;
    // 0 和 360 的时候是竖屏
    function initOrientation() {
        const ori = window.orientation;
        if (ori === 0 || ori === 360) {
            if (ele) {
                document.body.removeChild(ele);
                ele = null;
            }
        }
        else {
            if (ele)
                return;
            initTipInfo();
        }
    }
    function initTipInfo() {
        ele = document.createElement('div');
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
                         padding: 40px;`;
        ele.innerText = text;
        document.body.appendChild(ele);
    }
    function initEvent() {
        window.addEventListener('orientationchange', () => {
            initOrientation();
        });
    }
    initOrientation();
    initEvent();
}
/**
  * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
  * @param { number }  BaseWidth   基础的设计稿宽度        默认750
  * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
  * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
  * @example
  * DeviceUtils.initRem()
  */
export function initRem(BaseWidth = 750, MaxWidth = document.body.clientWidth, isFullOverMax = true) {
    const r = {};
    const MaxWidthP = MaxWidth / BaseWidth;
    r.Html = document.getElementsByTagName('html')[0];
    r.intiFontSize = function () {
        const baseOrientation = Math.min(document.body.clientWidth, document.body.clientHeight);
        let p = parseFloat((baseOrientation / BaseWidth).toFixed(4));
        let s = p > MaxWidthP ? MaxWidthP : p;
        if (isFullOverMax)
            s = p;
        return s;
    };
    r.updateFontSize = function () {
        r.Html.setAttribute('style', 'font-size:' + r.intiFontSize() * 100 + 'px');
        if (!isFullOverMax && document.body.clientWidth >= MaxWidth) {
            document.body.setAttribute('style', 'margin: 0 auto; width: 7.5rem');
        }
    };
    if (!document.addEventListener)
        return;
    window.addEventListener('resize', r.updateFontSize, false);
    document.addEventListener('DOMContentLoaded', r.updateFontSize, false);
}
