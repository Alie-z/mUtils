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
