import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ForgotPassword from '../components/ForgotPassword'
import SignUp from '../components/SignUp'
import HomePage from '../components/HomePage'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '../views/MealSelection.vue')
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
