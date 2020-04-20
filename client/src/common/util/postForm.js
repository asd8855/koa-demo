export function toQueryString(param, key, encode) {
  if (param instanceof FormData) {
    return param;
  }

  var paramStr = '';

  //当值为null时转为空字串
  if (param == null) {
    paramStr += '&' + key + '=' + '';
  }

  var t = typeof(param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += toQueryString(param[i], k, encode);
    }
  }
  return paramStr;
}
