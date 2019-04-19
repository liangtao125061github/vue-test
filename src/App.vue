<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
  /* reset & 重置组件样式 */
  @import "static/app.scss";
  #app{
    width: 100%;
    height: 100%;
  }
</style>
