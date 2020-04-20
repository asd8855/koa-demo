<template>
  <div id="app">
    <div v-if="show">
      <keep-alive>
        <router-view v-if="$route.name == '账号绑定' || $route.name == '添加孩子'"></router-view>
      </keep-alive>
      <router-view v-if="$route.name != '账号绑定' && $route.name != '添加孩子'" />
    </div>
    <div
      v-else
      class="flex-column-center"
    >
      <img
        src="./assets/ali_wx_hint.png"
        alt=""
      >
      <span>请在支付宝或微信环境中使用该功能</span>
    </div>
  </div>
</template>

<script>
import { isWx, isAli } from '@/common/util/browserUtil'
import StorageUtil from '@/common/util/storage';
export default {
  data() {
    return {
      show: false,
    }
  },

  created() {
    if (isWx || isAli) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>

<style lang="scss" scoped>
.flex-column-center {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width:126px;
    margin-bottom: 22px;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
</style>
