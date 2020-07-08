import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import routes from './routes'

import axios from 'axios'
Vue.prototype.$http = axios

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
