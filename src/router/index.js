import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/adminback/Login";
import Homel from "@/components/adminback/Homel";
import ArticleList from "@/components/adminback/ArticleList";
import CateMana from "@/components/adminback/CateMana";
import DataCharts from "@/components/adminback/DataCharts";
import PostArticle from "@/components/adminback/PostArticle";
import UserMana from "@/components/adminback/UserMana";
import BlogDetail from "@/components/adminback/BlogDetail";
/*import Login from '../components/adminback/Login.vue'*/
/*import Home from '../components/adminback/Homel'
import ArticleList from '../components/adminback/ArticleList'
import CateMana from '../components/adminback/CateMana'
import DataCharts from '../components/adminback/'
import PostArticle from '../components/adminback/PostArticle'
import UserMana from '../components/adminback/UserMana'
import BlogDetail from '../components/adminback/BlogDetail'*/
import Homel2 from "../components/views/Homel2";
import Article from "../components/views/Article";
import ArticleDetail from "../components/views/ArticleDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/homel',
            name:'home',
            component: Homel2,
            hidden:true,
            children:[
                {
                    path:'/homel',
                    name:'主页',
                    component:Article,
                    hidden:true,
                    meta:{
                        keepAlive:true,
                    },
                },
                {
                    path:'/homel/:id',
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
            component:ArticleDetail,

        },


        {
            path: '/',
            name: '登录',
            hidden: true,
            component: Login
        }, {
            path: '/home',
            name: '',
            component: Homel,
            hidden: true
        }, {
            path: '/home',
            component: Homel,
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
                        keepAlive: true
                    }
                },]},
                {
                    path: '/home',
                    component: Homel,
                    name: '文章管理',
                    hidden:true,
                    iconCls: 'fa fa-file-text-o',
                    children: [
                        {
                            path: '/blogDetail',
                            name: '博客详情',
                            component: BlogDetail,
                            hidden: true,
                            meta: {
                                keepAlive: false
                            }
                        },
                {
                    path: '/editBlog',
                    name: '编辑博客',
                    component: PostArticle,
                    hidden: true,
                    meta: {
                        keepAlive: false
                    }
                }
            ]
        }, {
            path: '/home',
            component: Homel,
            name: '用户管理',
            children: [
                {
                    path: '/user',
                    iconCls: 'fa fa-user-o',
                    name: '用户管理',
                    component: UserMana
                }
            ]
        }, {
            path: '/home',
            component: Homel,
            name: '栏目管理',
            children: [
                {
                    path: '/cateMana',
                    iconCls: 'fa fa-reorder',
                    name: '栏目管理',
                    component: CateMana
                }
            ]
        }, {
            path: '/home',
            component: Homel,
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
        ]}


)
