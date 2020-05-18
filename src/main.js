import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VCalendar from 'v-calendar';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// Install components globally
Vue.use(BootstrapVue);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VCalendar);

window.axios = axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});