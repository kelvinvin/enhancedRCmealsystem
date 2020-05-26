import Api from '@/services/Api'

export default {
    getMeals () {
        return Api().get('HomePage')
    }
}