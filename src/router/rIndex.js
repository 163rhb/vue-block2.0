import Vue from  'vue'
import Router from 'vue-router'
import Homel from "@/components/Homel";
import Article from "@/components/views/Article";

import ArticleDetail from "@/components/views/ArticleDetail";
/*import ArticleByTag from "@/components/views/ArticleByTag";*/
import AdminBack from "@/components/views/AdminBack";
import ArticleList from "@/components/adminBack/ArticleList";

import BlogDetail from "@/components/adminBack/BlogDetail";

import PostArticle from "@/components/adminBack/PostArticle";
import UserMana from "@/components/adminBack/UserMana";
import DataCharts from "@/components/adminBack/DataCharts";
import CateMana from "@/components/adminBack/CateMana";

/*import Login from "@/components/Login";*/


Vue.use(Router)
export default new Router(
    {
        routes: [
            {
                path: '/',
                redirect:"/home",
                name: '登录',
                hidden: true,
                component: Homel
            },/*{
            path:'/',
            name:'home',
            component:Homel,
            hidden:true
        },*/

            {
                path: '/home',
                name:'home',
                component: Homel,
                hidden:true,
                children:[
                    {
                        path:'/home',
                        name:'主页',
                        component:Article,
                        meta:{
                            keepAlive:true,
                        }
                    },
                    {
                        path:'/home/:id',
                        name:'分类文章',
                        component:Article,
                        meta:{
                            keepAlive:true,
                        }
                    },
                ]
            },
            {
                path: '/article/articleDetail',
                name:'文章详情',
                /* component: resolve=>require(['../components/utils/Article.vue'],resolve)*/
                component:ArticleDetail
            },
            {
                path: '/admin',
                component: AdminBack,
                name: '文章管理',
                iconCls: 'fa fa-file-text-o',
                children: [
                    {
                        path: '/articleList',
                        name: '文章列表',
                        component: ArticleList,
                        meta: {
                            keepAlive: true
                        }
                    }, {
                        path: '/postArticle',
                        name: '发表文章',
                        component: PostArticle,
                        meta: {
                            keepAlive: false
                        }
                    }, {
                        path: '/blogDetail',
                        name: '博客详情',
                        component: BlogDetail,
                        hidden: true,
                        meta: {
                            keepAlive: false
                        }
                    }, {
                        path: '/editBlog',
                        name: '编辑博客',
                        component: PostArticle,
                        hidden: true,
                        meta: {
                            keepAlive: false
                        }
                    }
                ]
            },
            {
                path: '/admin',
                component:AdminBack,
                name: '用户管理',
                children: [
                    {
                        path: '/user',
                        iconCls: 'fa fa-user-o',
                        name: '用户管理',
                        component: UserMana
                    }
                ]
            },
            {
                path: '/admin',
                component: AdminBack,
                name: '栏目管理',
                children: [
                    {
                        path: '/cateMana',
                        iconCls: 'fa fa-reorder',
                        name: '栏目管理',
                        component: CateMana
                    }
                ]
            },
            {
                path: '/admin',
                component: AdminBack,
                name: '数据统计',
                iconCls: 'fa fa-bar-chart',
                children: [
                    {
                        path: '/charts',
                        iconCls: 'fa fa-bar-chart',
                        name: '数据统计',
                        component: DataCharts
                    }
                ]
            }
            ]
    }
)

