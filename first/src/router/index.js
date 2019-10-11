import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import city from  '../components/City'
export default new Router({
  routes: [
    {path:'/',redirect:'/city'},
    {path:'/city',component:city},
  ]
})
