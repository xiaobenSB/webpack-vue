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
var a = 0;
//在使用了beforeEach方法下发生的情况
//好像是跳转下一个页面时必须执行到next();不然会一直执行，直到执行到next()，next(路由)只是改变跳转到哪个页面，最后还是要执行到next()的;
//也就是next()，是确认要跳转的路由，不然前面设置跳转路由不生效,如<router-link to="/index">和next(路由)
//注意当前页面和next(设置的路由)一致的话就不用执行next(),也就是当前路由发生改变才必须执行next()
router.beforeEach(function (to, from, next) {   
  a++
  if (a === 3) {
	console.log('xiaoben'+a)
    next('login')
  } else {
    console.log(a)
    next()
  }
})
export default router
