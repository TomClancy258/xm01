import {request} from "./request"
function getDetail(iid){
  return request({
    url:'/api/v1/detail',
    params:{
      iid
    }
  })
}

function getRecommend(){
  return request({
    url:'/api/v1/recommend'
  })
}
export {getDetail,getRecommend}