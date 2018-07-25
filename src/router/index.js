import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorlds',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: HelloWorld
    }
  ]
})
router.beforeEach(function (to, from, next) {
  if (to.name === 'login' || from.name === 'login') {
    next()
  } else {
    next('login')
  }
})
export default router
