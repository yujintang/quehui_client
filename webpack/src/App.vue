<template>
  <div id="app">
    <h1 style="text-align:center">{{ msg }}</h1>
    <el-input size="large" placeholder="请输入账号"></el-input>
    <el-input size="large" placeholder="请输入密码"></el-input>
    <el-button type="primary" size="large" @click.native="startHacking">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '登录'
    }
  },

  methods: {
    startHacking () {
      
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-input{
  width: 40%;
  margin: 3% 30% 0;
}
h1{
  margin-top: 5%
}
.el-button{
  margin-top: 3%;
  width: 40%;
  display: inline-block;
}
</style>
