import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
  ,
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  }
  ,
  {
    path: '/fenlei',
    name: 'fenlei',
    component: () => import('../views/fenlei.vue')
  }
  ,
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  }
  ,
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
