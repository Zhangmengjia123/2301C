import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/Myheader',  // 重定向:重新指向其它path,会改变网址
    children:[
      {
        path: '/Myheader',
        name: 'Myheader',
        component: () => import('../components/Myheader.vue')
      },
      {
        path: '/Mycontent',
        name: 'Mycontent',
        component: () => import('../components/Mycontent.vue')
      },
      {
        path: '/Myfooter',
        name: 'Myfooter',
        component: () => import('../components/Myfooter.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
