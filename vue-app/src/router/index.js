import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login'
import Dashboard from '@/view/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dasboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
