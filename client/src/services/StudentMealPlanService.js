import Api from '@/services/Api'

export default {
    getStudentMealPlan() {
        return Api().get('HomePage')
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    }
}