import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ForgotPassword from '../components/ForgotPassword'
import SignUp from '../components/SignUp'
import HomePage from '../components/HomePage'
import MealSelection from '../views/MealSelection.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/MealSelection',
    name: 'MealSelection',
    component: MealSelection
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
