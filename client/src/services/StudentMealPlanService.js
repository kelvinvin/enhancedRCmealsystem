import Api from '@/services/Api'

export default {
    getStudentMealPlan(userID) {
        return Api().get('MealSelection', userID)
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    }
}