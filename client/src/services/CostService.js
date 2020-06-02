import Api from '@/services/Api'

export default {
    updateBreakfastCost(content) {
        return Api().post('admin', content)
    },
    updateDinnerCost(content) {
        return Api().post('admin', content)
    },
    getCosts() {
        return Api().get('admin')
    }
}