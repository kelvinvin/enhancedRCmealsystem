import Api from '@/services/Api'

export default {
    getStudentMealPlan() {
        return Api().get('MealSelection')
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    }
}