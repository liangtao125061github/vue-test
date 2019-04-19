import Home from './components/home'
import Echarts from './components/echarts'

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