/**
 * 环境检查
 * @param localEnv
 */

var checkCurrentEnv = function (env) {

  let port = '';

  //if (!env) env = 'dev';
  let root = window.location.origin || ''

  //自动匹配项目
  if (!env) {
    //当前加载环境 dev：开发环境 test：测试环境 "": 生产环境或本地  pre 预发布
    env = (root.indexOf('localhost') > 0 || root.indexOf('127.0.0.1') > -1) ? 'test' : root.indexOf('testboss') > 0 ? 'testboss' : root.indexOf('educ') > 0 ? 'educ' : ''
  } else {
    env = env == 'formal' ? '' : env
  }
  var SERVER = {
    url: {
      kidscare: "/kidscare",
      root: ''
    }
  };

  SERVER.env = env;

  //端口检查
  for (var obj in SERVER.url) {
    var domain = env + ".imeduplus.com";
    //var domain = "zl.imeduplus.com";

    //SERVER.url[obj] =  window.location.protocol + '//' + domain + port + SERVER.url[obj];
    SERVER.url[obj] = 'https://' + domain + port + SERVER.url[obj];
  }
  return SERVER;
}

//环境检测 必填
// dev：开发环境 test：测试环境   pre 生产环境 
var SERVER = checkCurrentEnv("");
console.log("当前环境:" + JSON.stringify(SERVER));


export default {
  SERVER: SERVER
}