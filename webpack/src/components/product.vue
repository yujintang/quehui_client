<template>
  <div>
    <img :src="content.logo" width="40%">
    <div>
        <input type="file" @change="openFile"></input>
    </div>

    <div style="width:40%;margin: 20px auto;">
        <el-input v-model="content.name" placeholder="请输入名字"></el-input>
    </div>

    <div style="width:40%;margin: 20px auto;">
        <el-input
        type="textarea"
        :rows="8"
        placeholder="请输入内容"
        v-model="content.info">
        </el-input>
    </div>

    <el-button type="primary" @click="save">保存</el-button>
  </div>
</template>

<script>
    var img = require('../../static/1.png');
  export default {
      data () {
        return {
            content: {
                logo: img
            },
        }
      },
      created () {
        var This = this;
        if (this.$route.params && this.$route.params.id != 123) {
            axios.get('../qh_api/api/product/'+this.$route.params.id,{})
            .then(function (res) {
                console.log(res)
                if (res && res.data.code == 1) {
                var content = res.data.content;
                This.content = content;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        // '$route': 'fetchData'
      },
      methods: {
        save: function() {
            var This = this;
            if (this.$route.params.id == ':123') {
                axios.post('../qh_api/api/auth_product',{
                    name: this.content.name || '',
                    info: this.content.info || '',
                    logo: this.content.logo || '',
                    detail: '11'
                })
                .then(function (res) {
                    console.log(res)
                    if (res && res.data.code == 1) {
                        This.$router.push('../products')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }else{
                axios.put('../qh_api/api/auth_product/'+this.$route.params.id,{
                    name: this.content.name || '',
                    info: this.content.info || '',
                    logo: this.content.logo || ''
                })
                .then(function (res) {
                    console.log(res)
                    if (res && res.data.code == 1) {
                        location.reload();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
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
                  url: '../qh_api/api/auth_upload',
                  data: formData
                })
                .then(function (res) {
                    console.log(res)
                  if (res && res.data.content.list[0]){
                    This.content.logo = res.data.content.list[0].url_qiniu
                  }
                })
            }
            else
                alert("请确保文件为图像类型");
        },
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
</style>
