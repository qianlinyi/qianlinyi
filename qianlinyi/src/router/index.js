import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: HelloWorld
    }
  ]
})
