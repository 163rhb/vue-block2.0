<template>
<div >
<div id=art-detail  class=" typo typo-selection">
            <div class="art-header  animate__animated animate_pulse animate_shakeX">
                    <h1 style="margin-bottom: 80px">
                        <span class="art-title ">
                        {{article.title}}
                        </span>     <!--h1嵌套span标签要有里面设置class样式才有用-->
                    </h1>

            </div>

        <div style="width: 100%;display: flex;justify-content:center;align-items: center;margin-bottom: 40px">
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

    </div>
        <div>
           <!-- <pre class="line-numbers">
                <code class="language-java">
                //双指针
                public boolean hasCycle(ListNode head) {
                    if(head == null || head.next == null)   return false;
                    ListNode fast = head.next;
                    ListNode slow = head;
                    while(fast != slow){
                        if(fast == null || fast.next == null)
                            return false;
                        fast = fast.next.next;
                        slow = slow.next;
                    }
                    return true;
                }
            </code></pre>-->
            <div class="article-content typo" v-html="article.htmlContent"></div>
            <!--<div v-html="html"></div>-->
            </div>
        </div>
</div>



</template>

<script>
    import prismjs from '@/assets/js/prism'
    export default {
        name: "ArticleDetail",
        data() {
            return {
                html:"<pre class=\"line-numbers\">\n" +
                    "                <code class=\"language-java\">\n" +
                    "                //双指针\n" +
                    "                public boolean hasCycle(ListNode head) {\n" +
                    "                    if(head == null || head.next == null)   return false;\n" +
                    "                    ListNode fast = head.next;\n" +
                    "                    ListNode slow = head;\n" +
                    "                    while(fast != slow){\n" +
                    "                        if(fast == null || fast.next == null)\n" +
                    "                            return false;\n" +
                    "                        fast = fast.next.next;\n" +
                    "                        slow = slow.next;\n" +
                    "                    }\n" +
                    "                    return true;\n" +
                    "                }\n" +
                    "            </code></pre>",
                article: {},
            }
        },
        mounted() {
            this.initArticle();
        },
        methods: {
            initArticle() {
                console.log(this.$route.query.aid)
                let aid=this.$route.query.aid
                this.getRequest("/article/" + aid).then(resp => {
                        if (resp) {
                            console.log(resp.htmlContent)
                            let htmContent2=this.replaceHtml(resp.htmlContent)
                            this.article = resp
                            this.article.htmlContent=htmContent2
                           /* this.html=htmContent2.trim().replace(/[\r\n]/g,"")*/
                        }
                    //异步执行操作，待文章赋值后再渲染
                    setTimeout(()=>{
                            // eslint-disable-next-line no-undef
                            prismjs.highlightAll()
                        }
                        ,0)
                    }
                )
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
        }
    }


</script>

<style >

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
