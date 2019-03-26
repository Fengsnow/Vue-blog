import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Login from '@/components/Login'
import Tool from '@/components/Tool'
import Index from '@/components/Index'
import Filter from '@/components/Filter'
import Timeline from '@/components/Timeline'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/index.html'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/index.html',
          name: 'Index',
          component: Index
        },
        {
          path: '/tool',
          name: 'Tool',
          component: Tool
        },
        {
          path: '/timeline',
          name: 'Timeline',
          component: Timeline
        },
        {
          path: '/article/:id/:title',
          name: 'Article',
          component: Article
        },
        {
          path: '/search/:name',
          name: 'Search',
          component: Filter
        },
        {
          path: '/category/:name',
          name: 'Category',
          component: Filter
        },
        {
          path: '/tag/:name',
          name: 'Tag',
          component: Filter
        },
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
