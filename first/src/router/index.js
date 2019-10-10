import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import swx from '../components/swx'
import swx1 from  '../components/swx1'
import child2 from  '../components/child2'
export default new Router({
  routes: [
    {path:'/swx',component:swx},
    {path:'/swx1',component:swx1},
    {path:'/child2',component:child2},
  ]
})
