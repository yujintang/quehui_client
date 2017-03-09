<template>
    <div>
        <h1 style="text-align:center">{{ msg }}</h1>
        <div class="btn1">
            <el-button type="primary" size="large" @click="github_login">github登录</el-button>
        </div>

        <div class="ipt1">
            <el-input v-model="account" placeholder="请输入账号"></el-input>
        </div>

        <div class="ipt1">
            <el-input v-model="password" placeholder="请输入密码"></el-input>
        </div>

        <div class="btn1">
            <el-button type="primary" size="large" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
  export default {
      data () {
        return {
          msg: '登录',
          account: '',
          password: ''
        }
      },
      created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        // this.fetchData()
        // axios.get('../qh/api/corp',{})
        // .then(function (res) {
        //     console.log(res)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
      },

      methods: {
        github_login: function() {
          location.href = '../qh/auth/github';
        },
        login: function() {
          var This = this
          axios.post('../qh/auth/login',{
            email: this.account,
            password: this.password
          })
          .then(function (res) {
            if (res && res.data.code == 1) {
              This.$router.push('index')
            }
          })
          .catch(function (error) {
          });
        }
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
    .btn1{
      margin-top: 3%;
    }
    .ipt1{
      width:40%;
      margin: 30px auto;
    }
</style>
