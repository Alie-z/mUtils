// @ts-ignore
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './global/index'
import Api from './api'

Vue.prototype.API = new Api()
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
