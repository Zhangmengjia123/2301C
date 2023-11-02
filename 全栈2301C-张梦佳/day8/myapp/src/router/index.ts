import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component: () => import( '../views/Home/index.vue')
  },{
    path: '/fenlei',
    name: 'fenlei',
    component: () => import( '../views/Home/fenlei.vue')
  },{
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/Home/shop.vue')
  },{
    path: '/my',
    name: 'my',
    component: () => import( '../views/Home/my.vue')
  },{
    path: '/mygoods',
    name: 'mygoods',
    component: () => import( '../views/Home/mygoods.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
