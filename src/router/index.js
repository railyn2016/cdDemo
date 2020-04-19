import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import RoomList from '@/pages/room/RoomList'
import Login from '@/pages/users/login'
import Register from '@/pages/users/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/room/RoomList',
      name: 'RoomList',
      component: RoomList
    },{
      path: '/users/login',
      name: 'Login',
      component: Login
    },{
      path: '/users/register',
      name: 'Register',
      component: Register
    }
  ]
})
