import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignUp from '../components/SignUp.vue'
import HomePage from '../components/HomePage.vue'
import MealSelection from '../views/MealSelection.vue'
import TableMenu from '../components/TableMenu.vue'

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
  },
  {
    path: '/TableMenu',
    name: 'TableMenu',
    component: TableMenu
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
