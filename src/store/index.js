import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    /*为什么共享文章：因为方便tag页面操作文章，点击不同tag,更新不同文章*/
    state:{
        articles:{
            artContent:[],
            total:0,
        },
    },
    mutations:{
        initArticles(state,obj){
            console.log(obj.data)
            console.log(obj.total)
            state.articles.artContent=obj.data;
            state.articles.total=obj.total;
        }
    },
})
export default  store