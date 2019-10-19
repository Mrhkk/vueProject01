// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入封装的网络请求文件--myHttp
import myHttp from './Axios/Http'
//把封装的网络请求文件添加到vue构造函数的原型对象中
Vue.prototype.myHttp=myHttp;

import '../src/peishi/PeiShi_w'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Rate } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import animate from 'animate.css';
Vue.use(animate)
//倒计时
import { CountDown } from 'vant';
Vue.use(CountDown);



//要记得注册哦！！！很重要！！！
//引入模块
import Vuex from 'vuex';
//使用
Vue.use(Vuex);
//引入封装的vuex文件
import myVuex from './AueX/vuex';
//定义一个变量存储vuex里的方法
const store=new Vuex.Store({
  plugins: [createPersistedState()],
  //模块化封装，modules为调用模块化的方法名
    modules:{
      myVuex,
  }
});
//结合localstorage和vuex
import createPersistedState from 'vuex-persistedstate'









Vue.use(Tabbar).use(TabbarItem);
Vue.use(Rate);


Vue.use(Vant);
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
