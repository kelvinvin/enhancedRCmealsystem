import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false

Vue.use(BootstrapVue);

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
