import Vue from 'vue'
import Router from 'vue-router'
const Category=()=>import("views/category/Category")
const Index=()=>import("views/index/Index")
const Shop=()=>import("views/shop/Shop")
const Mine=()=>import("views/mine/Mine")

const Detail=()=>import("views/detail/Detail")

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"",
      redirect:"/index"
    },
    {
      path:"/index",
      component:Index
    },
    {
      path:"/category",
      component:Category
    },
    {
      path:"/shop",
      component:Shop
    },
    {
      path:"/mine",
      component:Mine
    },
    {
      path:"/detail/:iid",
      component:Detail
    }
  ]
})
