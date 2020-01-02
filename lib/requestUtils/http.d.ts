import Fetch from './index';
declare class Api extends Fetch {
    constructor(params: any);
    /**
     * 获取详情
     * @returns {*}
     * @private
     */
    _getDetail(data: any): any;
    /**
     * ins
     * @returns {*}
     * @private
     */
    _getIns(data: any): any;
    _init(url: any, data: any, method: any, isNoLoading?: boolean): Promise<any>;
}
export default Api;
