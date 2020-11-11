import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'home' } },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '主页' },
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/my',
    name: 'my',
    meta: { title: '我的' },
    component: () => import(/* webpackChunkName: "my" */ '../views/my/My.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 根据路由的meta标签设置文档的标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
