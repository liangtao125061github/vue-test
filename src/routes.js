import Home from './views/home'
import Form from './views/form'
import aForm from './views/aForm'

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
    path: '/aForm',
    name: 'antd表单',
    component: aForm
  }
]

export default routers
