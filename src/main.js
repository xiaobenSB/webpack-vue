import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

// 版权信息
var pkgs = require('../package.json')
var mmVue = `欢迎使用 VUE!
当前版本为：V${pkgs.version}
作者：小吴
Github：https://github.com/xiaobenSB
源码来源于码云 (https://gitee.com/react-module/node-vue)`
console.info(`%c${mmVue}`, `color:blue`)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
