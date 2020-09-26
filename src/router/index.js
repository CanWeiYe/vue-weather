import Vue from 'vue'
import Router from 'vue-router'
import { enableAlarm } from '@/settings'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/spring-weather',
    children: [{
      path: 'spring-weather',
      name: 'spring-weather',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'spring天气', icon: 'home' }
    }]
  },

  {
    path: '/weather',
    component: Layout,
    children: [
      {
        path: 'current-forecast',
        name: 'current-forecast',
        component: () => import('@/views/current-forecast/index'),
        meta: { title: '天气实况及预报', icon: 'current' },
      },
      {
        path: 'current-forecast/info',
        name: 'info',
        hidden: true,
        component: () => import('@/views/weather-info/index'),
        meta: {title: '城市天气'}
      }
    ]
  },

  {
    path: '/warning',
    component: Layout,
    children: [
      {
        path: 'weather-warning',
        name: 'weather-warning',
        hidden: !enableAlarm,
        component: () => import('@/views/warning/index'),
        meta: { title: '天气预警', icon: 'warning' }
      }
    ]
  },

  {
    path: '/forecastC',
    component: Layout,
    children: [
      {
        path: 'precipitation',
        name: 'precipitation',
        component: () => import('@/views/precipitation-forecast/index'),
        meta: { title: '全国降水预报', icon: 'index' }
      }
    ]
  },

  {
    path: '/typhoon',
    component: Layout,
    children: [
      {
        path: 'weather-typhoon',
        name: 'weather-typhoon',
        component: () => import('@/views/weather-typhoon/typhoon'),
        meta: { title: '实时台风', icon: 'typhoon' }
      }
    ]
  },

  {
    path: '/map',
    component: Layout,
    children: [
      {
        path: 'open-map',
        name: 'open-map',
        component: () => import('@/views/map/index'),
        meta: { title: '地图', icon: 'map' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'git链接', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
