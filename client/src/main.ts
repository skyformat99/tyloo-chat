/*
 * @file: Main js 入口文件
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年11月05 16:40:11
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Viewer from 'v-viewer'; // 图片预览插件
import 'viewerjs/dist/viewer.css';
import './ant-desigin'; // 引入ant-desigin
import moment from 'moment'; // 引入moment

Vue.config.productionTip = false;
// 使用中文时间
Vue.prototype.$moment = moment;

Vue.use(Viewer, {
  defaultOptions: {
    navbar: false,
    title: false,
    toolbar: {
      zoomIn: 1,
      zoomOut: 1,
      oneToOne: 4,
      reset: 4,
      prev: 0,
      next: 0,
      rotateLeft: 4,
      rotateRight: 4,
      flipHorizontal: 4,
      flipVertical: 4,
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');