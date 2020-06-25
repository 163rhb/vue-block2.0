import Vue from 'vue'
import App from './App.vue'
import router from './router/rIndex'
import 'element-ui/lib/theme-chalk/index.css'
import ElimentUI from 'element-ui'
import 'ant-design-vue/dist/antd.css';
/*import Button from 'ant-design-vue/lib/button';*/
import typo from '@/assets/css/typo.css'
import prismjs from '@/assets/js/prism'
import prismCss from '@/assets/css/prism.css'
import store from "@/store";
/*
import Highlight from './utils/highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);
*/
import {uploadFileRequest,deleteRequest, getRequest, postKeyValueRequest, postRequest, putRequest,isNotNullORBlank} from "@/utils/api";
Vue.prototype.getRequest=getRequest
Vue.prototype.postRequest=postRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.deleteRequest=deleteRequest
Vue.prototype.postKeyValueRequst=postKeyValueRequest
Vue.prototype.isNotNullORBlank=isNotNullORBlank
Vue.prototype.uploadFileRequest=uploadFileRequest
/*Vue.use(Prism)*/
Vue.use(prismjs)
Vue.use(prismCss)
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
///默认顶部
router.afterEach(() => {
  window.scrollTo(0, 0)
});




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
