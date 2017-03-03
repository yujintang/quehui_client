<template>
  <div>
    <h1 style="text-align:center">hello</h1>
  </div>
</template>

<script>
  export default {
      data () {
        return {
          loading: false,
        }
      },
      created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        // this.fetchData()
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
      },
      methods: {
      }
  }
</script>

<style>
</style>
