import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import swx from '../components/swx'
export default new Router({
  routes: [
    {path:'/swx',component:swx}
  ]
})
