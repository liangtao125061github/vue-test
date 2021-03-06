import Home from './views/home'
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
  }
]

export default routers
