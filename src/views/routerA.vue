<template>
  <div>
    跳转页面： <br/>
    方式一：(:to动态绑定name 或则 path) 页面自动解析成path地址 <br/>
    <router-link :to="{name:'RouterB'}">去B页面</router-link> <br/>
    方式二：(to="path")，只能指定path值  <br/>
    <router-link to="/RouterB">去B页面</router-link>  <br/>

    路由页面传入参数:<br/>
    方式一：(通过query传入参数，参数通过url get方式拼接) <br/>
    <router-link :to="{name:'RouterB', query: {name:'name1', title: 'title'} }">去B页面，传入参数</router-link>    <br/>

    方式二：(通过params传入参数，参数通过路径[/001]形式拼接到url上，如果没有在路径配置种使用参数占位符，url不会拼接，直接展示是具体路由页面) <br/>
    <router-link :to="{name:'RouterB', params: {name:'name2', title: 'title2'}}">去B页面，params传入参数</router-link> <br/>

  </div>
</template>

<script>
  import routerB from './routerB'
  exprot default {
    name: 'routerA'
  }
</script>
<style>
</style>
