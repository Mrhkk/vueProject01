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
import fdesc from  '../components/Fooddesc'
import VipDescription from '../components/VipDescription'
import UseCart from '../components/UseCart'
import InvoiceRecord from '../components/InvoiceRecord'
import SetUsername from '../components/SetUsername'
import Address from '../components/Address'
import Add from '../components/Add'
import AddDetail from '../components/AddDetail'
import ConfirmOrder from '../components/ConfirmOrder'
import ChooseAddress from '../components/ChooseAddress'
import AddAddress from '../components/AddAddress'
import Benefit from '../components/Benefit'
import HbDescription from '../components/HbDescription'
import Load from '../components/Load'
import Hbhistory from '../components/Hbhistory'
import Exchange from '../components/Exchange'
import Commend from '../components/Commend'
import Coupon from '../components/Coupon'
import Search from '../components/Search'
import Order from '../components/Order'
import Return from '../components/Return'
import Payment from '../components/Payment'
import ShopSafe from '../components/ShopSafe'
import ShopDetail from '../components/ShopDetail'
import Invoice from '../components/Invoice'
import Remarks from '../components/Remarks'
import FootDetail from '../components/FootDetail'

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
    {path:"/detailquestion",component:Detailquestion},
    {path:"/fdesc",component:fdesc},
    {path:'/vipDescription',component:VipDescription},
    {path:'/useCart',component:UseCart},
    {path:'/invoiceRecord',component:InvoiceRecord},
    {path:'/setUsername',component:SetUsername},
    {path:'/address',component:Address},
    {path:'/add',component:Add},
    {path:'/addDetail',component:AddDetail},
    {path:'/confirmOrder',component:ConfirmOrder},
    {path:'/chooseAddress',component:ChooseAddress},
    {path:'/addAddress',component:AddAddress},
    {path:"/benefit",component:Benefit},
    {path:"/hbDescription",component:HbDescription},
    {path:"/load",component:Load},
    {path:"/hbhistory",component:Hbhistory},
    {path:"/exchange",component:Exchange},
    {path:"/commend",component:Commend},
    {path:"/coupon",component:Coupon},
    {path:"/search",component:Search},
    {path:"/order",component:Order},
    {path:"/return",component:Return},
    {path:"/payment",component:Payment},
    {path:"/shopSafe",component:ShopSafe},
    {path:"/shopDetail",component:ShopDetail},
    {path:"/invoice",component:Invoice},
    {path:"/remarks",component:Remarks},
    {path:"/footDetail",component:FootDetail}


  ]
})
