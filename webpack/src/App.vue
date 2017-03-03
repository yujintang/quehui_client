<template>
    <router-view></router-view>
</template>

<script>
  import home from './components/home.vue'
  import login from './components/login.vue'
  import hello from './components/Hello.vue'

  export default {
      components: {
          home,
          login,
          hello
      }
  }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
    h1{
        margin-top: 5%
    }
    .el-button{
        margin: 3% auto;
        width: 40%;
        display: block;
    }
    .el-button+.el-button {
        margin: 3% auto;
    }
    a{
        text-decoration: none;
    }
</style>

