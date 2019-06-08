<template>
  <!--vue 的模版里面， 所有的内容要被一个根结点包含起来-->
  <div id="app">
    <img src="./assets/logo.png">
    <h1>
      {{ msg }}
    </h1>


    <input type="text" v-model="msg">


    <button v-on:click="getMsg()">
      获取表单数据
    </button>

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

    <!--<img v-bind:src="URL" />-->

    <div v-bind:title="msg">
      鼠标停留在上面看一下
    </div>



    <!--<img :src="URL" />-->

    <!--绑定HTML-->

    <div v-html="h"></div>

    <!--绑定数据的另一种方式-->

    <div v-text="msg"></div>

    <!--绑定CSS-->
    <!--v-bind:class :class的使用-->

    <div v-bind:class="{'red':flag, 'bule':!flag}">
      我是一个DIV
    </div>

    <div>
      <ul>
        <li v-for="(oo,key) in list" :class="{'red':key==1}">
          {{ oo }} - {{ key }}
        </li>
      </ul>
    </div>

    <div class="box" v-bind:style="{width:boxWdith+'px'}">
      我是一个用例Box的DIV
    </div>



    <router-view/>
  </div>
</template>

<script>
export default { /* export default 表示把这个组件暴露出去 */
  name: 'App',
  data () { /* 业务逻辑里面的数据 */
    return {
      msg: 'Welcome to Your Vue.js App',
      URL: 'https://img-blog.csdnimg.cn/20190603102934407.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk' +
        ',shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM3NDYwNzE=,size_16,color_FFFFFF,t_70',
      h: '<h1>我是一个标题</h1>',
      flag: false,
      boxWdith: 300,
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
  },
  methods: { /* 放置方法的地方 */
    getMsg() {
      alert(this.msg)
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

.red{
  color: #ff0001;
}
.bule{
  color: #0074D9;
}
.box{
  height: 100px;

  width: 100px;

  background: #01ff8e;
}
</style>
