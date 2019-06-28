import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Car from './views/Car.vue'
import My from './views/My.vue'
import Index from "./views/Index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/',
          name: 'home',
          component: Home
        
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify
        },
        {
          path: '/car',
          name: 'car',
          component: Car
        },
        {
          path: '/my',
          name: 'my',
          component: My
        
        }, 
      ]
    }
   
  ]
})
