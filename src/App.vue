<template>
  <!--vue 的模版里面， 所有的内容要被一个根结点包含起来-->
  <div id="app">
    <img src="./assets/logo.png">
    <h1>
      {{ msg }}
    </h1>
    <h2>
      Essential Links
    </h2>

    <h3>
      {{ obj.name }}
    </h3>

    <hr>

    <h3>
      <ol>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ol>
    </h3>

    <ol>
      <li v-for="item in list1">
        {{ item.name1 }}
      </li>
    </ol>

    <hr>

    <ul>
      <li v-for="oo in list2">
        {{ oo.cate }}

        <ol>
          <li v-for="ooo in oo.list">
            {{ ooo.title }}
          </li>
        </ol>
      </li>
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default { /* export default 表示把这个组件暴露出去 */
  name: 'App',
  data () { /* 业务逻辑里面的数据 */
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '张三'
      },
      list: ['11', '22', '33'],
      list1: [
        {'name1':'liupeng01'},
        {'name1':'liupeng02'},
        {'name1':'liupeng03'},
        {'name1':'liupeng04'},
      ],
      list2: [
        {
          "cate": "国内新闻",
          "list": [
            {'title': 'news11'},
            {'title': 'news12'}
          ]
        },
        {
          "cate": "国外新闻",
          "list": [
            {'title': 'news111'},
            {'title': 'news112'}
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
