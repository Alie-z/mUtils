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
