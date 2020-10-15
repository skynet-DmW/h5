import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/normalize.css'

// rem适配
import 'lib-flexible/flexible'
import './plugins/vant.js'
// axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:10050/'

axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  config.params = {
    ...config.params,
    t: new Date().getTime()
  }
  return config
}, error => {
  Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 400) {
      Vue.prototype.$toast.fail(error.response.data.msg)
    } else if (error.response && error.response.status === 401) {
      Vue.prototype.$toast.fail(error.response.data.msg)
      sessionStorage.removeItem('token')
      window.location.reload()
    } else if (error.response && error.response.status === 402) {
      sessionStorage.removeItem('token')
      window.location.reload()
    } else if (error.response && error.response.status === 405) {
      Vue.prototype.$toast.fail(error.response.data.msg)
    } else if (error.response && error.response.status === 409) {
      Vue.prototype.$toast.fail(error.response.data.msg)
    } else if (error.response && error.response.status === 500) {
      Vue.prototype.$toast.fail(error.response.data.msg)
    } else if (error.response && error.response.status === 502) {
      Vue.prototype.$toast.fail(error.response.data.msg)
    }
    return Promise.reject(error.response)
  }
)

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
