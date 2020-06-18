import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Vuetify);
Vue.use(datePicker);

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});