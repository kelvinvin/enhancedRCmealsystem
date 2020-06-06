import Api from '@/services/Api'

export default {
    getMeals () {
        return Api().get('HomePage')
    },
    addMeal(mealContent) {
        return Api().post('HomePage', mealContent)
    }
}