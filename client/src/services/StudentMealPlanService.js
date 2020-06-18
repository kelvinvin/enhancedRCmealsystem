import Api from '@/services/Api'

export default {
    getStudentMealPlan(userID) {
        return Api().post('MealPlans', userID)
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    },
    getRegistered() {
        return Api().get('MealPlans')
    },
}