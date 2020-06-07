import Api from '@/services/Api'

export default {
    getPayment () {
        return Api().get('/mealselection/payment')
    },

    registerAmount (content) {
        return Api().post('/mealselection/payment', content)
    },

    makePayment(content) {
        return Api().patch('/mealselection/payment', content)
    }
}