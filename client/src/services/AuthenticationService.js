import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    login (credentials) {
        return Api().post('login', credentials)
    },
    findMatric(userId) {
        return Api().post('/findMatric', userId)
    }
}