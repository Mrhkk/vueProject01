//接口
export default ({
  //存储数据
  state:{
    dizhi_data:[],
    deng_data:"",
    searchShop_data:[],
    photo_data:"",
  },
  //存储方法
  mutations: {
    //第一个值是固定的用来接收，第二个值是返回值也是传过来的参数
    //存储add.vue里的地址信息
    dizhi(state, res) {
      state.dizhi_data.push(res);
    },
    //存储Spassword.vue里的用户名
    deng(state, res) {
      state.deng_data = res;
    },
    //存储search.vue的输入框里的值
    searchShop(state,res){
      state.searchShop_data.push(res);
    },
    //删除search.vue单个数据
    deleteShop(state,res) {
     state.searchShop_data.splice(state.searchShop_data.indexOf(res),1);
    },
    //清空search.vue所有数据
    deleteShopnull(state,res){
      state.searchShop_data=[];
    },
    //存储info里的头像
    chuanphoto(state,res){
      state.photo_data=res;
    },
    //单个删除地址
    deldizhi(state,res){
      state.dizhi_data.splice(state.dizhi_data.indexOf(res),1);
    }
  },
});


