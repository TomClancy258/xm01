import {request} from "./request";
function getImg(){
  return request({
    url:'/api/v1/home/multidata'
  })
}
function getListByTitle(type,page){
  return request({
    url:'/api/v1/home/data',
    params:{
      type,
      page
    }
  })
}
export {getImg,getListByTitle}