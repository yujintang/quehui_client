<template>
  <div>
    <h1>后台管理</h1>
    <el-row>
      <el-col :span="8">
        <div id="address">
          <el-input v-model="content.address" placeholder="请输入公司地址"></el-input>
        </div>
      </el-col>

      <el-col :span="8">
        <div id="phone">
          <el-input v-model="content.phone" placeholder="请输入公司电话"></el-input>
        </div>
      </el-col>

      <el-col :span="8">
        <div id="e-mail">
          <el-input v-model="content.email" placeholder="请输入公司邮箱"></el-input>
        </div>
      </el-col>
      
      <el-col :span="8">
        <div id="info">
          <el-input v-model="content.info" placeholder="请输入公司介绍"></el-input>
        </div>
      </el-col>
      
      <el-col :span="8">
        <div id="name">
          <el-input v-model="content.name" placeholder="请输入公司名称"></el-input>
        </div>
      </el-col>

    </el-row>

    <div id="logo">
      <img :src="content.logo" width="100%">
      <input type="file" @change="openFile"></input>
    </div>
  
    
    <div class="save">
      <el-button @click="save" type="primary">保存</el-button>
    </div>
    
    
    
    
  </div>
</template>

<script>
  export default {
      data () {
        return {
          loading: false,
          input: '1',
          content: ''
        }
      },
      created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        // this.fetchData()
        var This = this;
        axios.get('/qh/api/corp',{})
        .then(function (response) {
            if (response && response.data.code == 1) {
              var content = response.data.content;
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
        save: function() {
          

          

          // axios.post('/qh/api/auth_upload',{
          //   formData: formData
          // })
          // .then(function (response) {
          //     console.log(response)
          //     if (response && response.data.code == 1) {
          //       // This.$router.push('home')
          //     }
          // })
          // .catch(function (error) {
          //     console.log(error);
          // });
        },
        openFile: function (form) {
            var This = this;

            var fileObj = form.target.files, file = fileObj[0];

            if (!file) return;

            var filename = file.name;
            var fileType = filename.substring(filename.lastIndexOf('.'), filename.length).toLowerCase();
            if (fileType == ".jpg" || fileType == ".gif" || fileType == ".jpeg" || fileType == ".png" || fileType == ".bmp") {

                //检查是否为图像文件
                if (!/image\/\w+/.test(file.type)) {
                    alert("请确保文件为图像类型");
                    return false;
                }

                var formData = new window.FormData();

                formData.append('file', file);

                axios({
                  method: 'post',
                  url: '/qh/api/auth_upload',
                  data: formData
                })
                .then(function (res) {
                    console.log(res)
                })
                
                this.content.logo = this.createObjectURL(file)

            }
            else
                alert("请确保文件为图像类型");
        },
        createObjectURL: function(blob){
          return window[window.URL?'URL':'webkitURL']['createObjectURL'](blob);
        }
      }
  }
</script>
<style>
  .el-col{
    padding: 1%;
  }
  #logo{
    margin: 3% 0 0 1%;
    width:10%;
  }
  .save{
    margin-top: 10%;
    clear: both;
  }
</style>
