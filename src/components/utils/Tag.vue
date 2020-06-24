<template>
    <div class="col-box">
        <div class="col-title">
            <h2>
                <span>
                    文章分类
                </span>
            </h2>
        </div>
        <el-collapse>
            <el-collapse-item class="collapse"
                    v-for="(item,index) in tags"
                              :title="item.tagName "
                              :key="index">
                    <div v-for="(item2,index) in item.children"
                               :key="index" class="buttton-group">
                       <a class="a-tag" @click="getArticlesByTag(item2.id,item2.tagName)">
                           <div>
                               <span class="a-span">{{item2.tagName}}</span>
                           </div>
                           <div>
                               <span class="a-span">{{item2.articleCounts}}篇</span>
                           </div>
                       </a>
                    </div>
            </el-collapse-item>
        </el-collapse>

        <!--<el-button type="info" round
                   v-for="(item,index) in tags"
                   :title="item.tagName "
                   :key="index">
            <div v-for="(item2,index) in item.children"
                 :key="index" class="buttton-group">
                <a class="a-tag" @click="getArticlesByTag(item2.id,item2.tagName)">
                    <div>
                        <span class="a-span">{{item2.tagName}}</span>
                    </div>
                    <div>
                        <span class="a-span">{{item2.articleCounts}}篇</span>
                    </div>
                </a>
            </div>
        </el-button>-->
    </div>
</template>

<script>
    import store from "@/store";

    export default {
        name: "Tag",
        data(){
            return{
                tags:{},
                tagNumbers:{},

            }
        },
        mounted(){
          this.initTags()
        },
        methods:{
            initTags(){
               /* const user=JSON.parse(window.sessionStorage.getItem("user"))
                const u_id=user.1*/
               const u_id=7
                this.getRequst("/home/getAllTagsByuId?uId="+u_id).then(resp=>{
                    if(resp)
                    {
                        this.tags=resp
                    }
                })
            },
            getArticlesByTag(tid,tagName)
            {
               this.$router.push({path:"/home/getArticleByTag",query:{tid:tid,tagName:tagName}})
                this.getRequst('/home/getArticleByTag?tId='+tid+'&pageId='+1).then(resp => {
                    if (resp) {
                        store.commit("initArticles",resp)
                    }
                })

            }
        }
    }
</script>

<style>
    .col-box{
        position: fixed;
       width: 300px;
    }
    .col-title{
        text-align: center;
    }
    .collapse{
        margin-left: 5px;
        width:100%;



    }
    /*.elbutton{
    cursor: pointer;
        width: 100%;
        text-align: left;
    }*/
    .buttton-group{
        background: #4d4d4d;
    }

    .buttton-group :hover{

        color: white;
    }
    .a-tag{

        height: 30px;
        display:flex;
        justify-content: space-between;
        border-bottom: solid 1px white;

    }
    .a-tag:hover{
        color:white;
    }
     .buttton-group a:active{
        color: white;
    }
    .a-span{
        color: white;
        font-size: 14px;
    }




</style>