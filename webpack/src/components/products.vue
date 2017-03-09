<template>
  <div>
    <h1>产品信息</h1>
    <router-link to="/product/:123">
        <el-button type="primary" icon="plus"></el-button>
    </router-link>
    <el-row v-for="item in content">
        <el-col :span="6">
            <img :src="item.logo" width="100%">
        </el-col>
        <el-col :span="4">{{item.name}}</el-col>
        <el-col :span="6">{{item.info}}</el-col>
        <el-col :span="8">
            <!--<router-link :to="{ path: 'product', query: { id: item._id }}">-->
            <router-link :to="'/product/' + item._id">
                <el-button type="primary" icon="edit"></el-button>
            </router-link>
            <el-button :pid="item._id" type="primary" icon="delete" @click="deletethis(item)"></el-button>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
      data () {
        return {
            content: ''
        }
      },
      created () {
        var This = this;
        axios.get('../qh/api/product',{})
        .then(function (res) {
            if (res && res.data.code == 1) {
              var content = res.data.content;
              This.content = content;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        // '$route': 'fetchData'
      },
      methods: {
        deletethis: function(item) {
            axios.patch('../qh/api/auth_product/'+item._id,{})
            .then(function (res) {
                if (res && res.data.code == 1) {
                    location.reload();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
      }
  }
</script>
<style>
    .el-row{
        height: 250px;
        clear: both;
    }
    .el-col{
        height: 180px;
        line-height:180px;
    }
    #logo{
        margin: 3% 0 0 1%;
        width:10%;
    }
    .save{
        margin-top: 10%;
        clear: both;
    }
    .el-button{
        width: 20%;
    }
</style>
