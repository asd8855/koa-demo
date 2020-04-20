import Net from '../common/util/net';
const baseURL = '';

export default class ucSev {
    /** 
     * 获取商品详情
     */
    static getDetailGoodsInfo(params, data) {
        return Net.getJSON(baseURL + "/goods/getDetailGoodsInfo", params, data);
    }
    /** 
     * 获取大类别
     */
    static getCategoryList(params, data) {
        return Net.getJSON(baseURL + "/goods/getCategoryList", params, data);
    }
    /** 
     * 获取子类别
     */
    static getCategorySubList(params, data) {
        return Net.getJSON(baseURL + "/goods/getCategorySubList", params, data);
    }
    // 
    /** 
     * 根据商品类别获取商品列表
     */
    static getGoodsListByCategorySubId(params, data) {
        return Net.getJSON(baseURL + "/goods/getGoodsListByCategorySubId", params, data);
    }
}
