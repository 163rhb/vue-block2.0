<template>
  <el-row v-loading="loading">
    <el-col :span="24">
      <div style="text-align: left;">
        <el-button type="text" icon="el-icon-back" @click="goBack" style="padding-bottom: 0px;margin-top: 20px">返回</el-button>
      </div>
    </el-col>
    <el-col :span="24">
      <div >
        <div id=art-detail  class=" typo typo-selection">
          <div class="art-header  animate__animated animate_pulse animate_shakeX">
            <h1 style="margin-bottom: 50px">
                        <span class="art-title ">
                        {{article.title}}
                        </span>     <!--h1嵌套span标签要有里面设置class样式才有用-->
            </h1>
          </div>
          <div>
        <div style="width: 100%;display: flex;justify-content:center;align-items: center">

          <el-tag color="#FF0033" size="small" style="margin-right: 8px">
            <span style="color: white ;">{{article.nickname}}</span>
          </el-tag>
          <el-tag  color="chocolate" size="small" style="margin-right: 8px">
            <i class="el-icon-view" style="color:white" ></i>
            <span style="color: white ;margin-left: 10px">浏览 {{article.pageView==null?0:article.pageView }}</span>
          </el-tag>
          <el-tag color=" #99CC33" size="small" style="margin-right: 8px">
            <span style="color: white;"> <i class="el-icon-date" style="margin-right: 8px"></i>{{article.editTime }}</span>
          </el-tag>
          <el-tag color="#66CCCC" v-for="(item,index) in article.tags" :key="index" size="small"
                  style="margin-right: 8px">
            <span style="color: white">{{item.tagName}}</span>
          </el-tag>
          <span style="margin:0px 50px 0px 0px"></span>
        </div>
      </div>
        </div>
      </div>
    </el-col>
    <div style="padding: 80px">
      <div  class="typo"  v-html="article.htmlContent">
      </div>
    </div>
  </el-row>
</template>
<script>
  import prismjs from '@/assets/js/prism'
    export default{
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      replaceHtml(htmlContent) {
        let reg=new RegExp("<pre","g"); //创建正则RegExp对象
        let reg1=new RegExp("<code class=\"lang-\"","g");
        let stringObj=htmlContent
        let newstr=stringObj.replace(reg,`<pre class="line-numbers language-java"`);
        let newstr2=newstr.replace(reg1,`<code class="language-java"`);
        return newstr2
        /*return htmlContent*/
      },
    },
    mounted: function () {
      var aid = this.$route.query.aid;
      this.activeName = this.$route.query.an
      var _this = this;
      this.loading = true;
      this.getRequest("/article/" + aid).then(resp=> {
       if(resp){
         console.log(resp)
         _this.loading = false;
         let htmContent2=this.replaceHtml(resp.htmlContent)
         this.article = resp
         this.article.htmlContent=htmContent2
         //马上异步调用prismjs实现代码高亮
         setTimeout(()=>{
                   // eslint-disable-next-line no-undef
                   prismjs.highlightAll()
                 }
                 ,0)
       }
      else {
         console.log(resp)
         _this.loading = false;
         _this.$message({type: 'error', message: '页面加载失败!'});
       }
    })

    },
    data(){
      return {
        article: {},
        loading: false,
        activeName: ''
      }
    }

  }


</script>
<style>
  #art-detail{
    padding: 5% 15%;
    /*padding: 30px;*/
    position: relative;
  }
  .art-header {
    display: flex;
    justify-content: center;

  }
  .art-title{
    color: #696969;
  }
  .article-content{
    color: #000;
    /*margin: 10px;
    position: relative;
    border: 1px solid #ddd;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background: white;
    */
  }

</style>
