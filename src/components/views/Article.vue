<template>

    <div class="main-box">
        <div>
            <div class="main-article">
                <div v-for="(art,index) in articles.artContent"
                     class="article-each"
                     :key="index">
                    <div class="article-header">
                        <div>
                            <h1 @click="readMore(art.id)">  <!--设置在div上没用，浏览器上很难点到div-->
                                <a class="article-title">
                                    {{art.title}}
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div class="art-content ">
                        {{art.summary}}
                    </div>
                    <div class="article-each-foot">
                        <div style="display:inline-block" >
                        <i class="el-icon-view" style="color: cadetblue"></i>
                        <span>
                            {{art.pageView}}
                       </span>
                        </div >
                        <!--<el-button type="text" icon="el-icon-time">
                        </el-button>-->
                        <div style="display:inline-block">
                        <a  class="article-time">
                                <i class="el-icon-date" >
                                </i>
                                {{art.publishDate}}
                        </a>
                        </div>
                        <div style="display: inline-block; margin-left: 300px;">
                            <p @click="readMore(art.id)" class="article-summary">
                                <a>阅读全文</a>
                            </p>
                            <!--  <a href="/article/articleDetail">aj</a>-->
                            <!--<a :href="'/#/article/articleDetail?aid='+art.id"  target="_blank">閲讀全文</a>-->
                        </div>
                    </div>
                </div>
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        layout="total, prev, pager, next, jumper"
                        :total=articles.total>
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>

import store from "@/store";

    export default {

        name: "Article",
        data() {
            return {
                currentPage:1,
            }
        },
        computed:{
            articles(){
                return store.state.articles
            }
        },
        mounted(){
            if(this.$router.currentRoute.path!='/home')
            {
                console.log("tag")
                this.initTagArticles()
            }
            else {
                console.log("又来")
                this.initAllArticles()
            }
        },
        watch:{
            $route(to,from){
                console.log(this.$route.name)
                   if(to.path=='/home')
                       this.initAllArticles()
                if(to.path=='/home/getArticleByTag')
                    this.initTagArticles()
                    console.log(from)
                    console.log(to.query.tid)


            }
        },
        methods: {
            initAllArticles() {
                this.getRequst('/home/getallarticles?pageId='+this.currentPage).then(resp => {
                    if (resp) {
                        console.log(resp)
                        store.commit("initArticles",resp)
                    }
                })
            },
            initTagArticles(){
                let tid=this.$route.query.tid
                this.getRequst('/home/getArticleByTag?tId='+tid+'&pageId='+this.currentPage).then(resp => {
                    if (resp) {
                        console.log("更新没")
                        store.commit("initArticles",resp)
                    }
                })
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
                    this.getRequst('/home/getallarticles?pageId=' + this.currentPage).then(resp => {
                        if (resp) {
                            store.commit("initArticles", resp)
                           /* this.articles=resp*/
                        }
                    })
            },
            readMore(aid){   /*地址栏传递数据*/
                this.$router.push({ path: '/article/articleDetail', query: { aid:aid  }});
            },
        }
    }
</script>

<style scoped>
    /*.main-box{



    }
    .main-article{



    }*/
    .article-each{

        height: 280px;
        margin: 30px;
        position: relative;
        border: 1px solid #ddd;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        background: #fff;
    }
    .article-header{
        display: flex;
        border-left: 5px solid #4d4d4d;
        padding: 30px 0 15px 7.6923%;
        justify-content: space-between;
    }
    .article-title{
        color: black;
        margin-left: 0;
        font-weight: 300;
        line-height: 35px;
        margin-bottom: 20px;
        font-size: 26px;
        height: 100%;
    }
    .art-content{
        height: 120px;
        font-size: 16px;
        margin: 20px 40px 0 60px;
    }

    .article-time{
        display: inline-block;
        color: #999;
        margin-left: 80px;
    }
    .article-each-foot{
        position: relative;
        padding-top: 20px;
        min-height: 72px;
        margin: 0 0 0 80px;
        border-top: 1px solid #ddd;


    }

    .article-summary{
        background: #3c3c3c;
    }
    .article-summary a{
        background: #4d4d4d;
        color: #fff;
        font-size: 12px;
        padding: 5px 8px;
        line-height: 16px;
        border-radius: 2px;
    }
    .article-summary a:hover{color: #b0a0aa}


</style>