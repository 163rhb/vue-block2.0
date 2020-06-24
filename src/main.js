import Vue from 'vue'
import App from './App.vue'
import router from './router/rIndex'
import 'element-ui/lib/theme-chalk/index.css'
import ElimentUI from 'element-ui'
import 'ant-design-vue/dist/antd.css';
/*import Button from 'ant-design-vue/lib/button';*/
import typo from '@/assets/css/typo.css'
import store from "@/store";
/*
import Highlight from './utils/highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);
*/
import {deleteRequst, getRequst, postKeyValueRequst, postRequst, putRequst} from "@/utils/api";
Vue.prototype.getRequst=getRequst
Vue.prototype.postRequst=postRequst
Vue.prototype.putRequst=putRequst
Vue.prototype.deleteRequst=deleteRequst
Vue.prototype.postKeyValueRequst=postKeyValueRequst
/*Vue.use(Prism)*/
/*Vue.use(prismjs)*/
/*Vue.use(prismCss)*/
Vue.config.productionTip = false
Vue.use(typo)
/*Vue.use(Button)*/
Vue.use(ElimentUI)
/*router.beforeEach((to, from, next) => {

  if (to.path == '/') {
    next();
  }else {
    if (window.sessionStorage.getItem("user")) {
      next();
    }else{
      next('/?redirect='+to.path);
    }
  }
})*/





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
