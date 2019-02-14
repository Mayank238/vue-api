import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostApi from '@/components/Postapi'
import CommentApi from '@/components/CommentApi'
import Api from '@/components/Apiconn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/post',
    	component: PostApi
    },
    {
    	path: '/comment',
    	component: CommentApi
    },
    {
    	path: '/api',
    	component: Api
    }
  ]
})
