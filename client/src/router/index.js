import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignUp from '../components/SignUp.vue'
import HomePage from '../components/student/HomePage.vue'
import AdminHomePage from '../components/admin/AdminHomePage.vue'
import MealSelection from '../views/MealSelection.vue'
import Feedback from '../components/student/Feedback.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
    component: HomePage,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/admin',
    name: 'AdminHomePage',
    component: AdminHomePage,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
