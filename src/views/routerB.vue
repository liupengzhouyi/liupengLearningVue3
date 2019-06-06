<template>
  <div>
    传入页面参数：{{params}}
  </div>
</template>
<script>
export default {
  name: 'routerB',
  data () {
    return {
      params: ''
    }
  },
  // 数据初始化完毕自动调用方法
  created () {
    // 获取传入的参数
    var param = this.$route.query
    // var param = this.$route.params;
    this.params = param
    // 如果使用query方式传入的参数使用this.$route.query 接收
    // 如果使用params方式传入的参数使用this.$router.params接收
  }
}
</script>
<style>
</style>
