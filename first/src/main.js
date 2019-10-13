// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myHttp from './Axios/Http'
import '../src/peishi/PeiShi_w'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Rate } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Rate);


Vue.use(Vant);
// import VueAxios from 'vue-axios'
Vue.prototype.myHttp=myHttp;

// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
