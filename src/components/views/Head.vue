<template>
    <div>
        <el-menu  class="menu-box"
                  :default-active="getActiveRoutes"
                  active-text-color="cadetblue"
                  mode="horizontal"
                  router
        >
            <el-menu-item   class="menu-item" index="/home">技术文章</el-menu-item>
            <el-menu-item  class="menu-item"  index="/article/live">生活趣谈</el-menu-item>
            <!--<a href="https://www.ele.me" target="_blank">订单管理</a>-->
            <el-menu-item class="menu-item"  index="/article/articleDetail">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Head",

        computed:{
            getActiveRoutes(){
                let path = this.$route.path;/*.replace('/','');*/
                return path
            },


        },
        mounted(){


        },

    }
</script>

<style scoped>

</style>