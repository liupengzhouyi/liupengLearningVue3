<template>

  <h1>
    V-html
  </h1>
  <hr>
  <h3>
    Html
  </h3>
  <b>
    使用 v-html 指令用于输出 html 代码：
  </b>
  <div id="paly01">
    <div v-html="message">

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
new Vue({
  el: '#paly01',
  data: {
    message: '<h1>Titie</h1>'
  }
})
</script>

<style scoped>

</style>
