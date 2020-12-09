import Home from './views/home'
import Echarts from './views/echarts'

const routers = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: Echarts
  },
]

export default routers
