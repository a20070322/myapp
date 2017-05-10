import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'

import Home from '@/scripts/components/home'
import Classify from '@/scripts/components/classify'
import Cart from '@/scripts/components/cart'
import Me from '@/scripts/components/me'

import Location from '@/scripts/components/home/location/location'

import List from '@/scripts/components/list'

import login from '@/scripts/components/me/login'
import Search from '@/scripts/components/search'




import Details from '@/scripts/components/details'
import Detail from '@/scripts/components/detail'

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
          component: Home,
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
        },

      ]
    },
    {

      // 详情路由
      path:'/details/:id',
      component:Details,
    },
    {
      path:'/detail/:id',
      component:Detail,
    },
    {
      // 列表路由
      path:'/list/:id',
      component:List
    },
    {
     //搜索
     path:'/search',
     component:Search
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

    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/location',
      component: Location
    }
  ]
})
