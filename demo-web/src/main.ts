/*
 * @Author: Topskys
 * @Date: 2022-11-26 15:53:55
 * @LastEditTime: 2022-11-28 22:13:50
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ElementUI 2.x
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// scss
import './style/index.scss';


Vue.use(ElementUI);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
