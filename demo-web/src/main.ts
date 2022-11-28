/*
 * @Author: Topskys
 * @Date: 2022-11-26 15:53:55
 * @LastEditTime: 2022-11-26 16:02:39
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ElementUI 2.x
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
