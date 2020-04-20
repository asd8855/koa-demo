//import Config from '../common/config';
import Config from '@/common/config';

import Net from '../common/util/net';

export default class  {
  /**
   *  查询省列表
   * @param {*} params 
   * @param {*} data 
   */
  static getAllProvince(params,data){
    return Net.getForm('/xys_api/region/getAllProvince',params,data);
  }
  /**
   * 根据省份查询 城市
   * @param {} params 
   * @param {*} data 
   */
  static getCityByProvinceId(params,data){
    return Net.getForm('/xys_api/region/getCityByProvinceId',params,data);
  }
  /**
   * 根据城市查询区域
   * @param {} params 
   * @param {*} data 
   */
  static getDistrictsByCityId(params,data){
    return Net.getForm('/xys_api/wireless/train/getDistrictsByCityId',params,data);
  }
}
