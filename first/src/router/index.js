import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import city from  '../components/City'
import chooseCity from  '../components/ChooseCity'
import  food from  '../components/Food'
import fan from '../components/Fan'
import profile from  '../components/Profile'
import Info from '../components/Info'
import Balance from '../components/Balance'
import Detail from '../components/Detail'
import Service from '../components/Service'
import Points from  '../components/Points'
import Vipcard from  '../components/Vipcard'
import Spassword from  '../components/Spassword'
import Resetpassword from '../components/resetPassword'
import Detailquestion from  '../components/DetailQuestion'
export default new Router({
  routes: [
    {path:'/',redirect:'/city'},
    {path:'/city',component:city},
    {path:'/choose',component:chooseCity},
    {path:'/food',component:food},
    {path:'/fan',component:fan},
    {path:'/profile',component:profile},
    {path:"/info",component:Info},
    {path:"/balance",component:Balance},
    {path:"/detail",component:Detail},
    {path:"/points",component:Points},
    {path:"/service",component:Service},
    {path:"/vipcard",component:Vipcard},
    {path:"/spassword",component:Spassword},
    {path:"/resetPassword",component:Resetpassword},
    {path:"/detailquestion",component:Detailquestion}
  ]
})
