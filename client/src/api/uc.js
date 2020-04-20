//import Config from '../common/config';

import Net from '../common/util/net';
const baseURL = '';

export default class ucSev {
    /** 
     * 用户注册接口
     */
    static registerUser(params, data) {
        return Net.postJSON(baseURL + "/user/register", params, data);
    }

    /** 
     * 用户登录接口
     */
    static loginUser(params, data) {
        return Net.postJSON(baseURL + "/user/login", params, data);
    }

}
