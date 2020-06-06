import Api from '@/services/Api'

export default {
    registerAmount (content) {
        return Api().post('/mealselection/payment', content)
    }
}