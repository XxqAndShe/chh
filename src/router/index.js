import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index'),
      meta: { title: '会员首页' }
    },
    {
      path: '/activity/list',
      name: 'activity-list',
      component: _import('activity/list'),
      meta: { title: '活动列表' }
    },
    {
      path: '/activity/details',
      name: 'activity-details',
      component: _import('activity/details'),
      meta: { title: '活动详情' }
    }
  ]
})
