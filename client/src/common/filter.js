/**
 * 全局过滤器
 * Created by jiaaobo on 16/11/28.
 */
import Vue from 'vue'
import NF from './util/number'

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Vue.filter('date', function (value, format) {
  return new Date(value).Format(format)
})

Vue.filter('moneyFilter', money => {
  if (typeof money === 'undefined') {
    return '0';
  }
  return parseFloat(money / 100).toFixed(2);
})

Vue.filter('moneyFormatFilter', value => {
  if (!value) {
    return `￥0.00`;
  }
  value = value + ''
  let moneyList = value.split('.');
  let money = 0;
  if (moneyList.length > 0) {
    money = money + parseInt(moneyList[0]);
  }
  if (moneyList.length > 1) {
    money = money + parseFloat('0.' + moneyList[1])
  }
  return `￥${money}`;
})

//货币格式化；decimals是需要保留的小数位数，默认2位数；prefix是货币格式默认¥
//例子：{{ 23456.344 | currency(2, '$')}} ====>  $23,456.34
Vue.filter('currency', function (value, decimals, prefix) {
  return NF.formatCurrency(value, decimals, prefix)
})

Vue.filter('userName', function (value, remark) {
  let name = value
  if (remark && remark.trim()) {
    name += `(${remark})`
  }
  return name
})


Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 //月份
    'd+': this.getDate(),                    //日
    'h+': this.getHours(),                   //小时
    'm+': this.getMinutes(),                 //分
    's+': this.getSeconds(),                 //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds()             //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  return fmt
}
