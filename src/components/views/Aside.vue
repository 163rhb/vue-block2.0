<template>
    <div class="aside-box">
        <div class="aside-overlay">
            <!--<div><el-avatar class="avatar" :size="200"  :src="circleUrl">
            </el-avatar></div>-->
            <div class="aside-touxiang">
                <a src="#" class="link">
                <img :src=circleUrl class="aside-img" :onerror=errPhoto>
                </a>
            </div>
        </div>
        <div class="text">
            <div class="name">
                    <h1 class="daming">
                        <a src="#" >波神小波</a>
                    </h1>
            </div>
            <div class="qianming">座右铭</div>
            <div class="weixin">微信号</div>
            <div class="weixin">qq号</div>
        </div>
    </div>
</template>

<script>
    /*import Tag from "@/components/utils/Tag"*/
    import defaultPhoto from "@/assets/mei.jpg"
    export default {
        name: "Aside",

        data(){
            return {
                errPhoto:' this.src="'+defaultPhoto+'"',
                circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584015371532&di=e02c2e5c99bce6942fb942b1467b3133&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fchinanba%2Fpics%2Fhv1%2F204%2F42%2F2305%2F149893539.jpg'
            }
        }
    }
</script>

<style >
    .aside-box{


    }
    .aside-box .aside-overlay{
        display: flex;
        /*align-items: center;*/
        background: #4d4d4d;
        width: 100%;
        height: 180px;

        justify-content: center;

    }
    .aside-touxiang{
        margin-top: 105px;

    }

    .aside-img{
        border: solid 5px #ffffff;
        width: 150px;
        height: 150px;
        border-radius: 50%;


    }
    .qianming{
        margin-top: 40px;
        color: #999;
        font-size: 14px;


    }
   .daming a{
        color: #666666;    /*要这样写或者用id选择器设置样式才会不被默认的覆盖*/
    }
    .daming a:hover{
        color: #b0a0aa ;

        /*color: red !important;*//*a标签设置颜色没用*/

    }


    .text{
        text-align: center;
        height: auto;
    }
    .name{
        margin-top: 110px;
    }
    .weixin{
        margin-top: ;
    }
</style>