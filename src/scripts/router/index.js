import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'



import Home from '@/scripts/components/home'
import Classify from '@/scripts/components/classify'
import Cart from '@/scripts/components/cart'
import Me from '@/scripts/components/me'
import Login from '@/scripts/components/me/login'
import Register from '@/scripts/components/me/register'
// import dome from '@/scripts/components/dome/dome2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      //设置初始路由
      redirect: '/home',
      children: [
        {
          //首页
          path: '/home',
          component: Home
        },
        {
          //分类
          path: '/classify',
          component: Classify
        },
        {
          //购物车
          path: "/cart",
          component:Cart
        },
        {
          //我的
          path:'/me',
          component:Me
        }
      ]
    },
    // {
    //   // 详情路由
    //   path:'/details/:id'
    // }
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    }
  ]
})
