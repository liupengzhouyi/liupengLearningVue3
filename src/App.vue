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
      list: ['11', '22', '33']
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
