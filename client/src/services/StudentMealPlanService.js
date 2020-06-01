import Api from '@/services/Api'

export default {
    getStudentMealPlan(userID) {
        return Api().get('MealSelection', UserId)
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    }
}