// <-- Dependencies section -->
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

// <-- Student views section -->
import Login from '../views/login.vue'
import ForgotPassword from '../views/forgotPassword.vue'
import Register from '../views/register.vue'
import Homepage from '../views/student/homepage.vue'
import MyMealPlan from '../views/student/myMealPlan.vue'
import submitFeedback from '../views/student/submitFeedback.vue'
import MealPlans from'../components/MealPlans.vue'
import Actions from'../views/student/actions.vue'


// <-- Admin views section -->
import AdminHomepage from '../views/admin/adminHome.vue'
import ViewFeedback from '../views/admin/viewFeedback.vue'
import ViewPayments from '../views/admin/viewPayments.vue'
import Initialize from '../views/admin/initialize.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/MealPlans',
    name: 'MealPlans',
    component: MealPlans
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Actions,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/myMealPlan',
    name: 'MyMealPlan',
    component: MyMealPlan,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
  },
  {
    path: '/submitfeedback',
    name: 'submitFeedback',
    component: submitFeedback,
    meta: {
      requireAuth: true, adminAuth: false, studentAuth: true }
  },
  {
    path: '/admin',
    name: 'AdminHomepage',
    component: AdminHomepage,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  },
  {
    path: '/viewfeedback',
    name: 'ViewFeedback',
    component: ViewFeedback,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  },
  {
    path: '/viewpayments',
    name: 'ViewPayments',
    component: ViewPayments,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  },
  {
    path: '/initialize',
    name: 'Initialize',
    component: Initialize,
      meta: { requireAuth: true, adminAuth: true, studentAuth: false }
  },
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
        next({name:'Homepage'})
      }
    } else if (to.meta.studentAuth) {
      if (authUser.isAdmin == 0) {
        next()
      } else {
        next({name:'AdminHomepage'})
      }
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router