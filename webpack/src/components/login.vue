<template>
    <div>
        <h1 style="text-align:center">{{ msg }}</h1>
        <div class="btn1">
            <el-button type="primary" size="large" @click="login">github登录</el-button>
        </div>
    </div>
</template>

<script>
  export default {
      data () {
        return {
          msg: '登录'
        }
      },
      created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        // this.fetchData()
        axios.get('../qh_api/api/corp',{})
        .then(function (res) {
            console.log(res)
        })
        .catch(function (error) {
            console.log(error);
        });
      },

      methods: {
        login: function() {
          // var This = this;
          // axios.get('/qh/api/corp')
          // .then(function (response) {
          //     if (response && response.data.code == 1) {
          //       This.$router.push('home')
          //     }
          // })
          // .catch(function (error) {
          //     console.log(error);
          // });
          location.href = 'qh/auth/github';

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
</style>
