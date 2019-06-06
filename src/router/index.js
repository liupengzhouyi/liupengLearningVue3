import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home'
import About from '../views/About.vue'
// 导入vue页面
// eslint-disable-next-line no-unused-vars
import RouterA from '../views/routerA'
// eslint-disable-next-line no-unused-vars
import RouterB from '../views/routerB'
// 使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/RouterA',
      component: 'RouterA'
    },
    {
      name: 'RouterB',
      // path: '/RouterB',
      // 动态拼接路由path，如果不指定url只是路由页面，否则（/RouterB/name2）
      path: '/RouterB/:name',
      component: 'RouterB'
    }
  ]
})
