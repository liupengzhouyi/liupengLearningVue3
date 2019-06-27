import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Test from "../components/page/test"
import Frist from "../App"


Vue.use(Router)


// 创建 路由 对象
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: '/first',
      name: 'first',
      component: Frist
    }
  ]
})
