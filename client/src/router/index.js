import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignUp from '../components/SignUp.vue'
import HomePage from '../components/student/HomePage.vue'
import AdminHomePage from '../components/admin/AdminHomePage.vue'
import AdminFeedback from '../components/admin/ViewFeedback.vue'
import MealSelection from '../views/MealSelection.vue'
import Feedback from '../components/student/Feedback.vue'
import store from '../store/store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
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
    component: MealSelection,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
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
    component: Feedback,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
  },
  {
    path: '/admin',
    name: 'AdminHomePage',
    component: AdminHomePage,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  },
  {
    path: '/adminfeedback',
    name: 'AdminFeedback',
    component: AdminFeedback,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})



router.beforeEach((to, from, next) => {
  const authUser = store.state.user;
  if(to.meta.requireAuth) {
    if (!store.state.isUserLoggedIn) {
      next({name:'Login'})
    } else if (to.meta.adminAuth) {
      if (authUser.isAdmin == 1) {
        next()
      } else {
        next({name:'HomePage'})
      }
    } else if (to.meta.studentAuth) {
      if (authUser.isAdmin == 1) {
        next('/admin')
      } else {
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
