import Home from './views/home'
import Echarts from './views/echarts'
import Form from './views/form'

const routers = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: '主页',
    component: Home
  },
  {
    path: '/form',
    name: '表单',
    component: Form
  },
  {
    path: '/echarts',
    name: '图表',
    component: Echarts
  },
]

export default routers
