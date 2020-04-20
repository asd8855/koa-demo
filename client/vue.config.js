const path = require("path");
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    port: 8088,
    before(app) { },
    https: false,
    open: false,
    proxy: {
      '/user': {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      '/goods': {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    }
  },
  lintOnSave: false, //关闭eslint代码检查
  configureWebpack: config => {
    config.resolve.extensions = [".js", ".vue", ".json"];
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"));
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ['van-circle__layer']
          })
        ]
      },
      less: {
        modifyVars: {
          green: '#219AFF',
        }
      }
    }
  }
};
