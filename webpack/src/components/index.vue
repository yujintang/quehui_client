<template>
  <div>
    <h1>后台管理</h1>

    <router-link to="/home">
        <el-button type="primary">公司信息</el-button>
    </router-link>

    <router-link to="/products">
    <el-button type="primary">产品信息</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
      data () {
        return {
        }
      },
      created () {
        
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        // '$route': 'fetchData'
      },
      methods: {
        
      }
  }
</script>
<style>

</style>
