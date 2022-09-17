import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import NotaView from './views/NotaView'
import NotaEdit from './views/NotaEdit'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/novaNota',
      name: 'novaNota',
      component: NotaEdit
    },
    {
      path: '/editaNota/:id',
      name: 'editaNota',
      component: NotaEdit
    },
    {
      path: '/verNota/:id',
      name: 'verNota',
      component: NotaView
    }, {
      path: '*',
      redirect: '/'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
