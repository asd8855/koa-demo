import axios from 'axios'
// import Vue from 'vue'
import qs from 'qs'

import { Toast } from 'vant';
import StorageUtil from './storage';
import { toQueryString } from './postForm'

var axInstance
const init = function (baseURL) {
  if (axInstance) {
    return
  }
  axInstance = axios.create({
    baseURL: baseURL || '',
    //请求超时时间
    timeout: 50000,
    //跨站点访问控制请求 如果true  Access-Control-Allow-Origin 字段必须指定域名，不能为*
    withCredentials: false
    //responseType: 'json'
  })

  //请求拦截器
  axInstance.interceptors.request.use(config => {

    if (config.data && typeof config.data === 'string') {
      config.data = config.data.replace(/[\'\"\\\/\b\f\n\r\t]/g, '')
    }
    return config
  }, (err) => {

  })

  //响应拦截器
  axInstance.interceptors.response.use(response => {
    //处理弹框按钮loading状态
    // store.dispatch('SET_DIALOG_LOADING', false)
    let bizRes = response.data
    console.log(bizRes);
    if (bizRes.code == 200) {
      return bizRes;
    } else {
      Toast(bizRes.message);
      return Promise.reject(bizRes);
    }
  })
}
init();

const handlerParams = function (url, obj) {
  var i = 0
  var isHasParam

  if (url.indexOf('?') != -1)
    isHasParam = true

  for (var o in obj) {
    if (obj[o] == undefined || obj[o] == null) {
      continue
    }

    if (i == 0 && !isHasParam) {
      url += '?' + o + '=' + obj[o]
    } else {
      url += '&' + o + '=' + obj[o]
    }
    i++
  }
  return url
}

const baseJSON = function (method, url, params, data) {
  params = params || {}
  data = data || {}
  let userInfo = StorageUtil.getLgObj('userInfo');
  let token = '';
  if (userInfo && userInfo.token) {
    token = userInfo.token;
  }
  url = handlerParams(url, params)
  return axInstance({
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Blade-Auth': token
    },
    data: data,
    url,
  })
}

const baseForm = function (method, url, params, data, type) {

  params = params || {}
  data = data || {}

  url = handlerParams(url, params)
  let userInfo = StorageUtil.getLgObj('userInfo');
  let token = '';
  if (userInfo && userInfo.token) {
    token = userInfo.token;
  }
  return axInstance({
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Blade-Auth': token
    },
    data: type === 'form' ? qs.stringify(data) : toQueryString(data),
    url,
  })

}


const buriedPointForm = function (method, url, params, data, type) {

  params = params || {}
  data = data || {}

  url = handlerParams(url, params)
  return axInstance({
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    data: type === 'form' ? qs.stringify(data) : toQueryString(data),
    url,
  })
}

/**
 * 公共方法
 */
export default {

  postJSON(url, params, data) {
    return baseJSON('POST', url, params, data)
  },

  getJSON(url, params) {
    return baseJSON('GET', url, params)
  },

  postForm(url, params, data, type) {
    return baseForm('POST', url, params, data, type)
  },
  postBuriedPointForm(url, params, data, type) {
    return buriedPointForm('POST', url, params, data, type)
  },

  getForm(url, params) {
    return baseForm('GET', url, params)
  },

  uploadFile(url, data) {

  },

}



