import Api from '@/services/Api'

export default {
    getStudentMealPlan(userAuth) {
        return Api().get('HomePage', {
            params: {
                UserId: userAuth
            }
        })
    },
    registerMealPlan(content) {
        return Api().post('MealSelection', content)
    }
}