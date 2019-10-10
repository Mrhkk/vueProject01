import axios from "axios";
//声明常量存储超时时间
const TIME_OUT_MS=60*1000;
//因为将来从后台拿到的数据可能无法直接使用或者使用起来不太方便，建议，可以在请求到数据之后对数据做加工，加工成符合自己需求的数据
// function handleResponse(result){
//   let responseData=result.data;
//   //console.log(responseData);
//   let finalData={
//     success:false,
//     msg:"",
//     errCode:"",
//     data:{
//       resData:[]
//     }
//   }
//   if(responseData.success){
//     //成功
//     finalData.success=true;
//     finalData.data.resData=responseData.data;
//   }else{
//     //失败
//     finalData.errCode=responseData.errorCode;
//     finalData.msg=responseData.errMsg;
//   }
//   return finalData;
// }
export default {
  /*
* 封装axios的get请求
* @param url 请求的地址
* @param response 请求成功的回调函数
* @param exception 请求异常的回调函数
* */
  get(url,response,exception){
    axios({
      method:"get",
      url:"https://elm.cangdu.org"+url,
      timeout:TIME_OUT_MS,
      header:{
        "Content-type":"application/json;charset=UTF-8"
      }
    }).then((result)=>{
      response(result.data);
    }).catch((error)=>{
      exception(error);
    });
  },
  /*
  * 封装axios的post请求
  * @param url 请求的地址
  * @param data 请求的参数数据
  * @param response 请求成功的回调函数
  * @param exception 请求异常的回调函数
  * */
  post(url,data,response,exception){
    axios({
      method: "post",
      url:"https://elm.cangdu.org"+url,
      data:data,
      timeout: TIME_OUT_MS,
      header:{
        "Content-type":"application/json;charset=UTF-8"
      }
    }).then((result)=>{
      response(result.data);
    }).catch((error)=>{
      if (exception){
        exception(error);
      }else{
        console.log(error);
      }
    })
  }
}
