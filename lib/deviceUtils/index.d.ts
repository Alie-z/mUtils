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
export declare function checkLayoutOrientation(text?: string): void;
/**
  * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
  * @param { number }  BaseWidth   基础的设计稿宽度        默认750
  * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
  * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
  * @example
  * DeviceUtils.initRem()
  */
export declare function initRem(BaseWidth?: number, MaxWidth?: number, isFullOverMax?: boolean): void;
