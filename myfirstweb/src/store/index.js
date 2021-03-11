import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('../views/tabbarviews/home')
const Cart=()=> import('../views/tabbarviews/Cart')
const Category=()=> import('../views/tabbarviews/Category')
const Profile=()=> import('../views/tabbarviews/Profile')
Vue.use(VueRouter) //安装路由插件

const routes = [//路由映射
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home

  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  }

]

const router = new VueRouter({//创建路由对象
  routes,
  mode: 'history',
})

export default router  //导出
