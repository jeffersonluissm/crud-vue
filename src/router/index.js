import Vue from 'vue'
import Router from 'vue-router'
import Colaboradores from '@/components/colaboradores/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Colaboradores',
      component: Colaboradores
    }
  ]
})
