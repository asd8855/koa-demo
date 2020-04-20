import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick-vue';
import 'amfe-flexible';
import './common/filter';
import "./common/iconfont/iconfont.css";
import 'vue-ydui/dist/ydui.base.css';
import './common/css/DIN-Medium.css'

import { Slider, SliderItem } from 'vue-ydui/dist/lib.px/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

import VConsole from 'vconsole'
new VConsole();

Vue.config.productionTip = false

FastClick.attach(document.body);
import {
  Lazyload,
  CountDown,
  Button,
  Cell,
  CellGroup,
  Field,
  Swipe,
  SwipeItem,
  List,
  RadioGroup,
  Radio,
  Area,
  AddressEdit,
  Popup,
  Picker,
  PullRefresh,
  Dialog,
  IndexBar,
  IndexAnchor,
  Search,
  Uploader,
  NavBar,
  Tabs,
  Tab,
  Col,
  Row
} from "vant";

Vue.use(CountDown)
  .use(Area)
  .use(AddressEdit)
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Lazyload)
  .use(Dialog)
  .use(Field)
  .use(List)
  .use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .use(RadioGroup)
  .use(Radio)
  .use(Popup)
  .use(Picker)
  .use(PullRefresh)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Uploader)
  .use(NavBar)
  .use(Tabs)
  .use(Tab)
  .use(Col)
  .use(Row);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
