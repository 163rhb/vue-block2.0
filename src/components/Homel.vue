<template>
    <div class="box">
        <div class="tool-wrap">
        <div class="lef-col" >
            <Aside></Aside>
        </div>
        </div>

        <div class="mid-col">
            <Head></Head>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/home' }" v-if="this.$router.currentRoute.path!='/home'">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="this.$router.currentRoute.path!='/home'">{{this.$route.name}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.query.tagName}}</el-breadcrumb-item>
            </el-breadcrumb>
                <Article></Article>
            <Foot style="margin-top: 50px"></Foot>
        </div>
        <div class="rig-col">
            <div>
                <Tag></Tag>
            </div>
        </div>

    </div>

</template>

<script>


import Tag from "@/components/utils/Tag";
import Head from "@/components/views/Head";
import Article from "@/components/views/Article";
import Foot from "@/components/views/Foot";
import Aside from "@/components/views/Aside";
export default {
    name: "Home",
    components: {Article, Foot, Aside, Head, Tag},
    computed: {
       /* show(){
            if( this.$route.path==='/home/getArticleByTag')
                return false
            return true
    }*/

}

}
</script>

<style>
    /**{
        margin: 0px;
        padding: 0px;
    }*/
    .box{

    }
    .tool-wrap{
        width: 344px;
        border-left: solid 1px #666;

    }
    .lef-col{
        background: #fff;
        width: 300px;
        position: fixed;
        /*opacity: 1;*/
       /* transition: all .2s ease-in;*/
        height: 100%;
        /*z-index: 999;*/
    }

    .mid-col{
        padding: 20px;
        position: absolute;
        min-height: 100%;
        background: #ECECEC;
        width: 920px;
        left: 300px;
    }
    .bread{
        margin: 30px;

    }
    .rig-col{
        position: relative;
        height: 100%;
        width: 300px;
        left: 1220px;
    }










</style>