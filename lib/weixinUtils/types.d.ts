export interface IWeixinUtils {
    wx: any;
    plantSdkUrlIosOrAndorid(): void;
    wxSign(ticket: string): IWxSign;
    routerAuthorized(appId: string): void;
    initWxConfig(config: IWxConfig): void;
    wxShareToFriend(sharInfo: IWxShareToFriend): Promise<string>;
    wxShareToFriendCircle(sharInfo: IWxShareToFriendsCircle): Promise<string>;
    hideAllNonBaseMenuItem(): Promise<string | object>;
    hideMenuItems(arr: string[]): Promise<string | object>;
    wxShare(sharInfo: any): Promise<string>;
}
/** 验签拿到的三个字段 */
export interface IWxSign {
    timestamp: any;
    nonceStr: string;
    signature: string;
}
/** 微信config的配置信息 */
export interface IWxConfig {
    debug?: boolean;
    appId: string;
    timestamp: string | number;
    nonceStr: string;
    signature: string;
    jsApiList: string[];
}
/** 微信分享回调的方法类型 */
export interface IWxCallBackType {
    type: string;
    data: any;
}
/** 分享给朋友的分享字段 */
export interface IWxShareToFriend {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
    success?: (res: IWxCallBackType) => void;
    cancel?: (res: IWxCallBackType) => void;
    complete?: (res: IWxCallBackType) => void;
}
/** 分享到朋友圈的分享字段 */
export interface IWxShareToFriendsCircle {
    title: string;
    link: string;
    imgUrl: string;
    success?: (res: IWxCallBackType) => void;
    cancel?: (res: IWxCallBackType) => void;
    complete?: (res: IWxCallBackType) => void;
}
