import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: HelloWorld
    }
  ]
})
