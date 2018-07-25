/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
// import store from './store/store'
// import * as types from './store/types'
// import router from './router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.msg = 'he'
const py = { 'xx': 'hjy' }
console.log(py)

// axios.get请求返回的是Pomise对象
axios.get(axios.defaults.baseURL).then(function (response) { axios.defaults.msg = response.data })
export function a () { return axios.get(axios.defaults.baseURL) }
// // http request 拦截器
// axios.interceptors.request.use(
//     config => {
//       if (store.state.token) {
//         config.headers.Authorization = `token ${store.state.token}`
//       }
//       return config
//     },
//     err => {
//       return Promise.reject(err)
//     })
//
// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//       return response
//     },
//     error => {
//       if (error.response) {
//         switch (error.response.status) {
//           case 401:
//                     // 401 清除token信息并跳转到登录页面
//             store.commit(types.LOGOUT)
//             router.replace({
//               path: 'login',
//               query: {redirect: router.currentRoute.fullPath}
//             })
//         }
//       }
//         // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//       return Promise.reject(error.response.data)
//     })

export default axios
