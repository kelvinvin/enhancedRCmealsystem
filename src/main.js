import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.config.productionTip = false

extend('domain', {
  validate: value => {
    var nusDomainRegex = /^e[\d]{7}@u.nus.edu$/;
    return nusDomainRegex.test(value);
  },
  message: 'Please enter your NUS domain email.'
});

extend('customPassword', {
  validate: value => {
    var requiredCharacters = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=!]).*$/.test(value);
    return requiredCharacters;
  },
  message: 'Your password needs to be min length 8 chars, and must include 1 lower-case, upper-case, and special character (@#$%^&*+=!)'
});

extend('nusMatric', {
  validate: value => {
    var isNUSmatricId = /^A[\d]{7}[A-Z]$/.test(value);
    return isNUSmatricId;
  },
  message: 'NUS Matric ID is invalid'
});

Vue.use(BootstrapVue);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Vuetify);
Vue.use(VCalendar, {
  // ...some defaults
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  },
  // ...other defaults
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});