import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'homeIndex',
      component: () => import( /* webpackChunkName: "home" */ '@/views/home/index'),
    },

    // 协议页面
    {
      path: '/agreement',
      name: 'agreement',
      component: () => import( /* webpackChunkName: "agreement" */ '@/views/agreement/index'),
    },
    
    // 成功
    {
      path: '/success',
      name: 'successIndex',
      component: () => import( /* webpackChunkName: "success" */ '@/views/success'),
    },

    // 失败
    {
      path: '/failure',
      name: 'failureIndex',
      component: () => import( /* webpackChunkName: "failure" */ '@/views/failure'),
    },

    // 缺省页面
    {
      path: '/default',
      name: 'defaultIndex',
      component: () => import( /* webpackChunkName: "home" */ '@/views/default'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import( /* webpackChunkName: "home" */ '@/views/notFound'),
    },
    {
      path: '*',
      name: 'notFound',
      redirect: {
        name: '404',
      },
    },
  ],
})

export default router