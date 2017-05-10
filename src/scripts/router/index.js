import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'

import Home from '@/scripts/components/home'
import Classify from '@/scripts/components/classify'
import Cart from '@/scripts/components/cart'
import Me from '@/scripts/components/me'
import Me_info from '@/scripts/components/me/me-info'
import Me_youhui from '@/scripts/components/me/me-youhui'

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
    {
      //我的页子页--信息页
      path:'/me-info',
      component:Me_info
    },
    {
      //我的页子页--优惠券页
      path:'/me-youhui',
      component:Me_youhui
    }
  ]
})
