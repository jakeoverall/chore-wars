import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Start from '@/components/Start'
import Chores from '@/components/Chores'
import Household from '@/components/Household'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/start',
      name: 'Start',
      component: Start

    },
    {
      path: '/chores',
      name: 'Chores',
      component: Chores
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
